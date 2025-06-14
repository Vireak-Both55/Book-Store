import React, { createContext, useState, useEffect } from 'react';
import { BookProduct } from '../data/BookProduct';

export const FilterCateContext = createContext();

export const FilterCateProvider = ({ children }) => {
  const [books, setBooks] = useState(BookProduct);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetail,setShowDetail] = useState(false);
  const [counter,setCounter] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

  const openDialog = ({ title, message, onConfirm, onCancel }) => {
    setDialogData({ title, message, onConfirm, onCancel });
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    // Combine search + category filter
    let filtered = BookProduct;

    if (category !== 'All') {
      filtered = filtered.filter(book => book.category === category);
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(book =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setBooks(filtered);
  }, [category, searchTerm]);

  const filterByCategory = (cat) => setCategory(cat);

  return (
    <FilterCateContext.Provider
      value={{ filteredBooks: books, filter: filterByCategory, searchTerm, setSearchTerm ,showDetail,setShowDetail}}
    >
      {children}
    </FilterCateContext.Provider>
  );
};
