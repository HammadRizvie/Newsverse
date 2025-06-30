import React, { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import NewsBox from '../../components/modules/NewsBox';
import { articlesStyles } from './styles';
import { apiCall } from '../../utils/apiCall';
import { 
  NEWS_API_BASE_URL, 
  NEWS_API_KEY, 
  NEWS_API_COUNTRY, 
  ARTICLES_API_END_POINT,
  GUARDIAN_API_BASE_URL,
  GUARDIAN_API_KEY,
  GUARDIAN_ARTICLES_END_POINT,
  GUARDIAN_FIELDS,
  GUARDIAN_TAGS,
  NYT_API_BASE_URL,
  NYT_API_KEY,
  NYT_ARTICLES_END_POINT
} from '../../constants/api';
import { NewsArticle, GuardianArticle, NYTArticle } from "../../types";
import { useSearch } from '../../context/SearchContext';
import { useFilter } from '../../context/FilterContext';

const PAGE_SIZE = 6;

const Articles: React.FC = () => {
  const { searchKeyword, resetSearch } = useSearch();
  const { fromDate, toDate, sources, category, resetFilters, resetPendingFilters } = useFilter();
  const [newsApiArticles, setNewsApiArticles] = useState<NewsArticle[]>([]);
  const [guardianArticles, setGuardianArticles] = useState<GuardianArticle[]>([]);
  const [nytArticles, setNytArticles] = useState<NYTArticle[]>([]);
  const [guardianTotalResults, setGuardianTotalResults] = useState<number | null>(null);
  const [nytTotalResults, setNytTotalResults] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState<number | null>(null);

  useEffect(() => {
    resetSearch();
    resetFilters();
  }, []);

  const fetchNewsApi = useCallback(async (pageNum: number) => {
    setLoading(true);
    try {
      const params: any = {
        country: NEWS_API_COUNTRY,
        pageSize: PAGE_SIZE,
        page: pageNum,
        apiKey: NEWS_API_KEY,
      };
      
      if (searchKeyword) params['q'] = searchKeyword;
      
      if (fromDate) params['from'] = fromDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      
      if (toDate)  params['to'] = toDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      
      if (sources) params['sources'] = sources;
      
      if (category)  params['category'] = category;
      

      const data = await apiCall(`${NEWS_API_BASE_URL}${ARTICLES_API_END_POINT}`, params);
      if (data.articles && data.articles.length > 0) {
        setNewsApiArticles(prev => pageNum === 1 ? data.articles : [...prev, ...data.articles]);
        setTotalResults(data.totalResults);
        setHasMore(prev => {
          const newArticles = (pageNum === 1 ? 0 : newsApiArticles.length) + data.articles.length;
          return newArticles < data.totalResults;
        });
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [searchKeyword, fromDate, toDate, sources, category, newsApiArticles]);

  const fetchGuardianApi = useCallback(async (pageNum: number) => {
    try {
      let params: any = {
        'api-key': GUARDIAN_API_KEY,
        'show-fields': GUARDIAN_FIELDS,
        'show-tags': GUARDIAN_TAGS,
        'page-size': PAGE_SIZE.toString(),
        'page': pageNum.toString(),
      };

      if (category) params['section'] = category;
      
      if (searchKeyword) params['q'] = searchKeyword;

      const data = await apiCall(`${GUARDIAN_API_BASE_URL}${GUARDIAN_ARTICLES_END_POINT}`, params);
      if (data.response && data.response.results) {
        setGuardianArticles(prev => pageNum === 1 ? data.response.results : [...prev, ...data.response.results]);
        setGuardianTotalResults(data.response.total);
      }
    } catch (err) {
      console.error('Guardian API error:', err);
    }
  }, [category, searchKeyword]);

  const fetchNYTApi = useCallback(async (pageNum: number) => {
    try {
      let params: any = {
        'api-key': NYT_API_KEY,
        'page': (pageNum - 1).toString(), // NYT uses 0-based pagination
      };

      if (searchKeyword) params['q'] = searchKeyword;
      
      if (fromDate) params['begin_date'] = fromDate.toISOString().split('T')[0].replace(/-/g, ''); // Format as YYYYMMDD
      
      if (toDate) params['end_date'] = toDate.toISOString().split('T')[0].replace(/-/g, ''); // Format as YYYYMMDD
      
      if (category) params['fq'] = `news_desk:(${category})`;

      const data = await apiCall(`${NYT_API_BASE_URL}${NYT_ARTICLES_END_POINT}`, params);
      if (data.response && data.response.docs) {
        setNytArticles(prev => pageNum === 1 ? data.response.docs : [...prev, ...data.response.docs]);
        setNytTotalResults(data.response.meta.hits);
      }
    } catch (err) {
      console.error('NYT API error:', err);
    }
  }, [searchKeyword, fromDate, toDate, category]);

  useEffect(() => {
    setNewsApiArticles([]);
    setGuardianArticles([]);
    setNytArticles([]);
    setGuardianTotalResults(null);
    setNytTotalResults(null);
    setPage(1);
    setHasMore(true);
    setTotalResults(null);
    fetchNewsApi(1);
    fetchGuardianApi(1);
    fetchNYTApi(1);
  }, [searchKeyword, fromDate, toDate, sources, category]);

  useEffect(() => {
    if (page > 1) {
      fetchNewsApi(page);
      fetchGuardianApi(page);
      fetchNYTApi(page);
    }
  }, [page, searchKeyword, fromDate, toDate, sources, category]);

  const guardianHasMore = guardianTotalResults === null || guardianArticles.length < guardianTotalResults;
  const nytHasMore = nytTotalResults === null || nytArticles.length < nytTotalResults;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        if (!loading && (hasMore || guardianHasMore || nytHasMore)) {
          setPage(prev => prev + 1);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, guardianHasMore, nytHasMore]);

  return (
    <Box sx={articlesStyles.root}>
      <Typography variant="h6" sx={articlesStyles.heading}>
        Articles
      </Typography>
      
      <Typography variant="h5" sx={{ color: '#fff', mb: 2, mt: 4 }}>
        NewsAPI Articles
      </Typography>
      <Grid container spacing={3}>
        {newsApiArticles.map((news, idx) => (
          <Grid size={{ xs: 12,  sm:12, md: 4 ,lg : 4 }} key={`newsapi-${idx}`}>
            <NewsBox news={{
              title: news.title,
              desc: news.description || '',
              author: news.author || '',
              date: news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : '',
              image: news.urlToImage || '',
            }} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ color: '#fff', mb: 2, mt: 6 }}>
        Guardian Articles
      </Typography>
      <Grid container spacing={3}>
        {guardianArticles.map((article, idx) => (
          <Grid size={{ xs: 12,  sm:12, md: 4 ,lg : 4 }} key={`guardian-${idx}`}>
            <NewsBox news={{
              title: article.webTitle,
              desc: article.fields?.body?.substring(0, 150) + '...' || '',
              author: article.fields?.byline || article.tags?.find(tag => tag.type === 'contributor')?.webTitle || '',
              date: article.webPublicationDate ? new Date(article.webPublicationDate).toLocaleDateString() : '',
              image: article.fields?.thumbnail || '',
            }} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ color: '#fff', mb: 2, mt: 6 }}>
        New York Times Articles
      </Typography>
      <Grid container spacing={3}>
        {nytArticles.map((article, idx) => {
          let imageUrl = '';
          const mm = article.multimedia;
          if (Array.isArray(mm) && mm.length > 0) {
            const photo = mm.find(m => m.subtype === 'photo');
            const media = photo || mm[0];
            if (media && media.url) {
              imageUrl = media.url.startsWith('http') ? media.url : `https://www.nytimes.com/${media.url}`;
            }
          } else if (mm && typeof mm === 'object') {
            // NYT sometimes returns multimedia as an object with default/thumbnail
            const mmObj = mm as { default?: { url: string }; thumbnail?: { url: string } };
            if (mmObj.default && mmObj.default.url) {
              imageUrl = mmObj.default.url;
            } else if (mmObj.thumbnail && mmObj.thumbnail.url) {
              imageUrl = mmObj.thumbnail.url;
            }
          }
          return (
            <Grid size={{ xs: 12,  sm:12, md: 4 ,lg : 4 }} key={`nyt-${idx}`}>
              <NewsBox news={{
                title: article.headline.main,
                desc: article.abstract || '',
                author: article.byline.original || article.byline.person?.map(p => `${p.firstname || ''} ${p.lastname || ''}`).join(', ') || '',
                date: article.pub_date ? new Date(article.pub_date).toLocaleDateString() : '',
                image: imageUrl,
              }} />
            </Grid>
          );
        })}
      </Grid>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress color="primary" />
        </Box>
      )}
    </Box>
  );
};

export default Articles; 