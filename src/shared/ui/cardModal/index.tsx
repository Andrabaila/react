import React from 'react';
import { CardModalObj } from './types';
import './styles.scss';

export default function CardModal(cardData: CardModalObj) {
  return (
    <div className="Card">
      <h3 className="Card__item_product-name">{cardData.name}</h3>
      <img className="Card-image" src={cardData.image} alt="card image" />
      <p className="Card__item_product-price">{cardData.status}</p>
      <p className="Card__item_product-description">{cardData.origin.name}</p>
      <div className="Card__properties-container">
        <p>
          Gender: <b>{cardData.gender}</b>
        </p>
        <p>
          Origin: <b>{cardData.species}</b>
        </p>
      </div>
      <p className="Card__item_product-category">Type: {cardData.type}</p>
      <p className="Card__item_product-category">Location: {cardData.location.name}</p>
      <p className="Card__item_product-category">Created: {cardData.created}</p>
      <p className="Card__gap"></p>
      <button className="Card__item_product-add-button button">Add to cart</button>
    </div>
  );
}
