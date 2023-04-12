import Header from '../../widgets/header';
import SearchBar from '../../widgets/searchBar';
import React from 'react';
import './styles.scss';
import CardList from '../../widgets/cardList';

export default function PageMain() {
  return (
    <>
      <Header />
      <main className="Main">
        <SearchBar />
        <CardList />
      </main>
    </>
  );
}
