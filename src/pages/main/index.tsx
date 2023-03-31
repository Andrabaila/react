import Card from '../../shared/ui/card';
import Header from '../../widgets/header';
import SearchBar from '../../widgets/searchBar';
import cardsArray from '../../shared/data/cardsArray';
import React from 'react';
import './styles.scss';

export default function PageMain() {
  const cards = cardsArray.map((cardObj) => {
    return <Card key={cardObj.id} {...cardObj} />;
  });

  return (
    <>
      <Header />
      <main className="Main">
        <SearchBar />
        <div className="card-list" data-testid="card-list">
          {cards}
        </div>
      </main>
    </>
  );
}
