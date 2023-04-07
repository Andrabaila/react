import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';

const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>(
    localStorage.getItem('searchBarValue') || ''
  );
  const inputRef = useRef<string>(searchBarValue);

  useEffect(() => {
    inputRef.current = searchBarValue;
  }, [searchBarValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(event.target.value);
  };

  useEffect(() => {
    const savedSearchBarValue = localStorage.getItem('searchBarValue');
    savedSearchBarValue && setSearchBarValue(savedSearchBarValue);
    return () => {
      localStorage.setItem('searchBarValue', inputRef.current || '');
    };
  }, []);

  return (
    <form className="Search-bar">
      <input type="search" value={searchBarValue} onChange={handleChange} />
    </form>
  );
};

export default SearchBar;
