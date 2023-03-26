import React from 'react';
import { FormCardObj } from '../data/types';

export default class FormCard extends React.Component<FormCardObj> {
  render() {
    return (
      <div className="formCard">
        <h3 className="Card__item_product-name">{this.props.title}</h3>
        <img className="Card-image" src={this.props.thumbnail} alt="card image" />
        <div className="Card__properties-container">
          <p className="Card__item_product-stock">
            In stock: <b>{this.props.checkbox}</b>
          </p>
          <p>
            Brand: <b>{this.props.brand}</b>
          </p>
        </div>
        <p className="Card__item_product-category">
          Category: <b>{this.props.category}</b>
        </p>
        <p className="Card__gap"></p>
        <p className="Card__item_date">{this.props.date}</p>
      </div>
    );
  }
}
