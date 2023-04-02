import React from 'react';
import { FormCardObj } from '../../data/types';

type FormCardProps = FormCardObj;

const FormCard: React.FC<FormCardProps> = ({
  title,
  thumbnail,
  checkbox,
  brand,
  category,
  date,
}) => {
  return (
    <div className="formCard">
      <h3 className="Card__item_product-name">{title}</h3>
      <img className="Card-image" src={URL.createObjectURL(thumbnail)} alt="card image" />
      <div className="Card__properties-container">
        <p className="Card__item_product-stock">
          In stock: <b>{checkbox}</b>
        </p>
        <p>
          Brand: <b>{brand}</b>
        </p>
      </div>
      <p className="Card__item_product-category">
        Category: <b>{category}</b>
      </p>
      <p className="Card__gap"></p>
      <p className="Card__item_date">{date}</p>
    </div>
  );
};

export default FormCard;
