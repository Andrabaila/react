import React from 'react';
import { CardObj } from '../../data/types';
import './styles.scss';

export default function Card(cardData: CardObj) {
  return (
    <div className="Card">
      <h3 className="Card__item_product-name">{cardData.title}</h3>
      <img className="Card-image" src={cardData.thumbnail} alt="card image" />
      <p className="Card__item_product-price">${cardData.price}</p>
      <p className="Card__item_product-description">{cardData.description}</p>
      <div className="Card__properties-container">
        <p>
          Discount: <b>{cardData.discountPercentage}</b>
        </p>
        <p>
          Rating: <b>{cardData.rating}</b>
        </p>
      </div>
      <div className="Card__properties-container">
        <p className="Card__item_product-stock">
          In stock: <b>{cardData.stock}</b>
        </p>
        <p>
          Brand: <b>{cardData.brand}</b>
        </p>
      </div>
      <p className="Card__item_product-category">
        Category: <b>{cardData.category}</b>
      </p>
      <p className="Card__gap"></p>
      <button className="Card__item_product-add-button button">Add to cart</button>
    </div>
  );
}
