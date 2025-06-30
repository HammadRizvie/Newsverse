import React, { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import NewsBox from '../../components/modules/NewsBox';
import { homeStyles } from './styles';
import { apiCall } from '../../utils/apiCall';
import { NEWS_API_BASE_URL, NEWS_API_KEY , EVERYTHING_API_END_POINT, NEWS_API_DOMAIN } from '../../constants/api';
import { NewsArticle } from "../../types";
import { useSearch } from '../../context/SearchContext';

const PAGE_SIZE = 6;

const Home: React.FC = () => {
  const { searchKeyword, resetSearch } = useSearch();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState<number | null>(null);

  useEffect(() => {
    resetSearch();
  }, []);

  const fetchNews = useCallback(async (pageNum: number) => {
    setLoading(true);
    try {
      const params: any = {
        domains:NEWS_API_DOMAIN,
        pageSize: PAGE_SIZE,
        page: pageNum,
        apiKey: NEWS_API_KEY,
      };
      if (searchKeyword) params.q = searchKeyword;
      const data = await apiCall(`${NEWS_API_BASE_URL}${EVERYTHING_API_END_POINT}`, params);
      if (data.articles && data.articles.length > 0) {
        setArticles(prev => [...prev, ...data.articles]);
        setTotalResults(data.totalResults);
        setHasMore(prev => {
          const newArticles = articles.length + data.articles.length;
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
  }, [searchKeyword, articles]);

  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
    setTotalResults(null);
    fetchNews(1);
  }, [searchKeyword]);

  useEffect(() => {
    if (page > 1) {
      fetchNews(page);
    }
  }, [page, searchKeyword]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        if (!loading && hasMore) {
          setPage(prev => prev + 1);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <Box sx={homeStyles.root}>
      <Typography variant="h6" sx={homeStyles.heading}>
        Top Headlines
      </Typography>
      <Grid container spacing={3}>
        {articles.map((news, idx) => (
          <Grid size={{ xs: 12,  sm:12, md: 4 ,lg : 4 }} key={idx}>
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
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress color="primary" />
        </Box>
      )}
    </Box>
  );
};

export default Home; 