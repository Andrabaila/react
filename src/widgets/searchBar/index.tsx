import getSearchInputValue from '../../features/getSearchInputValue';
import React, { useState, useEffect } from 'react';
import './styles.scss';

export default function SearchBar() {
  const [searchInputValue, setSearchInputValue] = useState(getSearchInputValue());

  useEffect(() => {
    localStorage.setItem('searchInputValue', searchInputValue);
    const handleBeforeUnload = () => setSearchInputValue(getSearchInputValue());
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [searchInputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <form className="Search-bar">
      <input type="search" value={searchInputValue} onChange={handleInputChange} />
    </form>
  );
}
