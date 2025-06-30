import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider } from './context/SearchContext';
import { FilterProvider } from './context/FilterContext';

// Import Anton font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </SearchProvider>
  </React.StrictMode>
);

reportWebVitals(); 