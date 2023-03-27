import { FormCardObj } from 'data/types';
import React from 'react';
import FormCard from './FormCard';

export default class FormCardList extends React.Component<{ cards: FormCardObj[] }> {
  render() {
    return (
      <div className="FormCardList">
        {this.props.cards.map((card, index) => (
          <FormCard key={index} {...card} />
        ))}
      </div>
    );
  }
}
