import React, { createContext, useContext, useState } from 'react';
import { SearchContextType } from "../types";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const resetSearch = () => setSearchKeyword('');
  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword, resetSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used within a SearchProvider');
  return ctx;
}; 