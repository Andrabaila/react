import React from 'react';
import { CardObj } from '../data/types';

export default class Card extends React.Component<CardObj> {
  render() {
    return (
      <div className="Card">
        <h3 className="Card__item_product-name">{this.props.title}</h3>
        <img className="Card-image" src={this.props.thumbnail} alt="card image" />
        <p className="Card__item_product-price">${this.props.price}</p>
        <p className="Card__item_product-description">{this.props.description}</p>
        <div className="Card__properties-container">
          <p>
            Discount: <b>{this.props.discountPercentage}</b>
          </p>
          <p>
            Rating: <b>{this.props.rating}</b>
          </p>
        </div>
        <div className="Card__properties-container">
          <p className="Card__item_product-stock">
            In stock: <b>{this.props.stock}</b>
          </p>
          <p>
            Brand: <b>{this.props.brand}</b>
          </p>
        </div>
        <p className="Card__item_product-category">
          Category: <b>{this.props.category}</b>
        </p>
        <p className="Card__gap"></p>
        <button className="Card__item_product-add-button button">Add to cart</button>
      </div>
    );
  }
}
