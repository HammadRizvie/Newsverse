# Newsverse - News Aggregate Challenge App

## Live Deployed Link: https://newsverse-o930q5yiu-hammad-rizvis-projects.vercel.app

---

## Introduction
Welcome to the Newsverse application documentation. This project is a comprehensive news aggregator built with React.js and TypeScript. The application integrates multiple news sources (NewsAPI, The Guardian, and NYT API) to provide users with a personalized and seamless news reading experience across both desktop and mobile devices.

---

## UI/UX Inspiration
The user interface and user experience design are inspired by https://gossip-themes.com/beatrix-html, focusing on a clean, magazine-like layout that enhances readability and navigation.

---

## Key Features

### Categories Navigation
- **Dynamic Category Selection:** Effortlessly navigate through various news categories such as News, Sports, Entertainment, Technology, and more.
- **Persistent State Management:** Maintains the selected category across sessions.
- **Responsive Design:** Seamless navigation on both desktop and mobile devices with a mobile-first approach.
- **Smooth Transitions:** Smooth transitions and animations for category changes.

### Filtration Based on Sources and Categories
- **Source Filtering:** Filter articles based on selected sources like NewsAPI, The Guardian, and NYT API.
- **Category Filtering:** Filter articles within specific categories for a more tailored news feed.
- **Advanced Filter Combinations:** Enhanced filtering options, enabling users to combine multiple filters.
- **Real-Time Filter Updates:** Filters are applied in real-time, providing instant feedback and updated article lists.

### Customize Feed
- **Personalized Content:** Customize your news feed by selecting preferred sources, categories, and authors.
- **Smart Content Deduplication:** Prevents duplicate articles from appearing in the feed.

### Search
- **Debounced Search Implementation:** Efficient searching, reducing unnecessary API calls.
- **Real-Time Results:** Instant search results as users input their queries.

### Load More
- **Infinite Scrolling:** Load more articles as the user reaches the end of the current list.
- **Pagination Handling:** Manages article pagination seamlessly.
- **Loading State Management:** Visual feedback during the loading of additional articles.

### Skeleton Loading
- **Progressive Loading UI:** Displays placeholder content while articles are being fetched.
- **Smooth Transitions:** Smooth user experience during loading states with subtle animations.
- **Fallback States:** Provides fallback UI in case of loading failures.
- **Placeholder Components:** Reusable placeholder components standardize the loading experience.

### API Integration
- **Multiple News Sources:** Integrates NewsAPI, NYT API, and The Guardian API.

### Article List Screen
- **Detailed Article Information:** Presents comprehensive information about each article, including the title, source, author, publication time, image, and more.
- **Responsive Layout:** Fully responsive article list.
- **Efficient Rendering:** Optimized rendering performance for large lists.

---

## Design Patterns
- **Container/Presentational Components:** Separates data fetching/state management from UI rendering.
- **Service Layer for API Integration:** Abstracts API interactions through a dedicated service layer.
- **Memoization for Performance Optimization:** Uses React.memo, useMemo, and useCallback.
- **Skeleton Loading Pattern:** Uses placeholder components like ArticleSkeleton.
- **Modular Architecture:** Organizes the codebase into feature-based modules.

---

## TODO
- Testing and some optimization are still left due to time constraints.
- Search history and caching enhancements.
- Add to Favorites feature.

---

## Docker Setup

### Prerequisites
- **Docker Desktop:** Ensure Docker Desktop is installed and running on your machine.

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_GUARDIAN_KEY=your_guardian_api_key
REACT_APP_NYT_KEY=your_nyt_api_key
REACT_APP_NEWS_API_KEY=your_news_api_key
```

### Building and Running with Docker Compose
Navigate to the project root and run:
```bash
docker-compose up --build
```

---

## Troubleshooting
- **WSL2 Issues (Windows):**
  - Enable virtualization in BIOS.
  - Enable "Virtual Machine Platform" and "Windows Subsystem for Linux":
    ```
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    ```
  - Set WSL2 as default:
    ```
    wsl --set-default-version 2
    ```
  - Restart your computer after making changes.
- **APIs not working in Docker?**
  - Make sure you set the correct API keys in your environment variables or Docker run command.
  - For local APIs, use `host.docker.internal` instead of `localhost` in your API URLs.
  - Rebuild the Docker image after changing environment variables.
- **Hot reload not working in Docker?**
  - Use the provided PowerShell script or Docker Compose for proper volume mounting.
- **CORS issues?**
  - Ensure your API server allows requests from your frontend's origin.

---

## Credits
- [Create React App](https://github.com/facebook/create-react-app)
- [Material UI](https://mui.com/)
- [NewsAPI](https://newsapi.org/)
- [The Guardian Open Platform](https://open-platform.theguardian.com/)
- [The New York Times API](https://developer.nytimes.com/)

## Limitations & Future Improvements

Due to limited time, some features and improvements could not be fully implemented. If more time were available, I would:
- Add comprehensive unit testing for all components and utilities
- Resolve known and unknown bugs
- Improve and refactor functionality, including:
  - Make the personalized news feed work robustly with proper state management (e.g., Redux or Context API)
  - Implement more advanced and reliable filteration logic
  - Add a complete theme setting (light/dark mode, user preferences)
  - Enhance error handling and user feedback
  - Optimize performance and code structure
  - Polish the UI/UX further
  - Add search history, caching, and favorites features
  - And many more enhancements for a production-grade experience

---
