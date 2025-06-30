export type NewsBoxProps = {
    news: {
        title: string;
        desc: string;
        author: string;
        date: string;
        image: string;
      };
}

export type NewsSource = {
  id: string;
  name: string;
}

export type NewsArticle = {
  source: NewsSource;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export type GuardianArticle = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields?: {
    headline?: string;
    byline?: string;
    body?: string;
    thumbnail?: string;
    publication?: string;
  };
  tags?: Array<{
    id: string;
    type: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
  }>;
}

export type GuardianApiResponse = {
  response: {
    status: string;
    total: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    results: GuardianArticle[];
  };
}

export type NYTMultimediaArrayItem = {
  rank: number;
  subtype: string;
  caption?: string;
  credit?: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy?: {
    xlarge?: string;
    xlargewidth?: number;
    xlargeheight?: number;
  };
  subType?: string;
  crop_name?: string;
};

export type NYTMultimediaObject = {
  caption?: string;
  credit?: string;
  default?: {
    url: string;
    height: number;
    width: number;
  };
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
};

export type NYTArticle = {
  _id: string;
  headline: {
    main: string;
    kicker?: string;
    content_kicker?: string;
    print_headline?: string;
    name?: string;
    seo?: string;
    sub?: string;
  };
  byline: {
    original?: string;
    person?: Array<{
      firstname?: string;
      middlename?: string;
      lastname?: string;
      qualifier?: string;
      title?: string;
      role?: string;
      organization?: string;
      rank?: number;
    }>;
    organization?: string;
  };
  abstract: string;
  web_url: string;
  pub_date: string;
  document_type: string;
  news_desk?: string;
  section_name?: string;
  subsection_name?: string;
  multimedia?: NYTMultimediaArrayItem[] | NYTMultimediaObject;
  keywords?: Array<{
    name: string;
    value: string;
    rank: number;
    major: string;
  }>;
}

export type NYTApiResponse = {
  status: string;
  copyright: string;
  response: {
    docs: NYTArticle[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

export type BlackSliderOverlayProps = {
  open: boolean;
  onClose: () => void;
}

export type SideDrawerProps =  {
  open: boolean;
  onClose: () => void;
}

export type NavigationItem = {
  label: string;
  path: string;
}

export type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

export type SearchContextType = {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  resetSearch: () => void;
}