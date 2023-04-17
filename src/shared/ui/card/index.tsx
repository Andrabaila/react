import React from 'react';
import { CardObj } from './types';
import './styles.scss';

export default function Card(cardData: CardObj) {
  return (
    <div className="Card">
      <h3 className="Card__item_product-name">{cardData.name}</h3>
      <img className="Card-image" src={cardData.image} alt="card image" />
      <button className="Card__item_product-add-button button">More</button>
    </div>
  );
}
