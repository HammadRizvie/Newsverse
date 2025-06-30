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