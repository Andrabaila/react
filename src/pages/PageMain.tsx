import Card from '../components/Card';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import cardsArray from '../data/cardsArray';
import React from 'react';

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
          <div className="card-list">{cards}</div>
        </main>
      </>
    );
  }
}
