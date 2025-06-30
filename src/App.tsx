import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/modules/Header';
import Articles from './pages/Articles';
import NewsFeed from './pages/NewsFeed';
import Footer from "./components/modules/Footer";
import ScrollToTopButton from './components/elements/ScrollToTopButton';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{backgroundColor:'#131313'}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/news-feed" element={<NewsFeed />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App; 