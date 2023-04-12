import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import './styles.scss';
import getCharacters from '../../shared/api/getCharacters';

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

  const handleSubmit = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement && event.key === 'Enter') {
      setSearchBarValue(event.target.value);
      console.log('hello');
      event.preventDefault();
      getCharacters();
    }
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
      <input
        type="search"
        value={searchBarValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </form>
  );
};

export default SearchBar;
