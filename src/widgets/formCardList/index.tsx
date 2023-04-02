import { FormCardObj } from 'shared/data/types';
import React from 'react';
import FormCard from '../../shared/ui/formCard';
import './styles.scss';

interface Props {
  cards: FormCardObj[];
}

const FormCardList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="FormCardList">
      {cards.map((card, index) => (
        <FormCard key={index} {...card} />
      ))}
    </div>
  );
};

export default FormCardList;
