import Card from '../../shared/ui/card/Card';
import Header from '../../widgets/header/Header';
import SearchBar from '../../widgets/searchBar/SearchBar';
import cardsArray from '../../shared/data/cardsArray';
import React from 'react';
import './styles.scss';

export default class PageMain extends React.Component {
  render() {
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
}
