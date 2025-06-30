import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
  fromDate: Date | null;
  toDate: Date | null;
  sources: string;
  category: string;
  author: string;
  pendingFromDate: Date | null;
  pendingToDate: Date | null;
  pendingSources: string;
  pendingCategory: string;
  pendingAuthor: string;
  setPendingFromDate: (date: Date | null) => void;
  setPendingToDate: (date: Date | null) => void;
  setPendingSources: (sources: string) => void;
  setPendingCategory: (category: string) => void;
  setPendingAuthor: (author: string) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  resetPendingFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [sources, setSources] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');


  const [pendingFromDate, setPendingFromDate] = useState<Date | null>(null);
  const [pendingToDate, setPendingToDate] = useState<Date | null>(null);
  const [pendingSources, setPendingSources] = useState('');
  const [pendingCategory, setPendingCategory] = useState('');
  const [pendingAuthor, setPendingAuthor] = useState('');

  const applyFilters = () => {
    setFromDate(pendingFromDate);
    setToDate(pendingToDate);
    setSources(pendingSources);
    setCategory(pendingCategory);
    setAuthor(pendingAuthor);
  };

  const resetFilters = () => {
    setFromDate(null);
    setToDate(null);
    setSources('');
    setCategory('');
    setAuthor('');
    resetPendingFilters();
  };

  const resetPendingFilters = () => {
    setPendingFromDate(null);
    setPendingToDate(null);
    setPendingSources('');
    setPendingCategory('');
    setPendingAuthor('');
  };

  return (
    <FilterContext.Provider value={{ 
      fromDate, 
      toDate, 
      sources, 
      category, 
      author,
      pendingFromDate,
      pendingToDate,
      pendingSources,
      pendingCategory,
      pendingAuthor,
      setPendingFromDate, 
      setPendingToDate, 
      setPendingSources, 
      setPendingCategory, 
      setPendingAuthor,
      applyFilters,
      resetFilters,
      resetPendingFilters
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilter must be used within a FilterProvider');
  return ctx;
}; 