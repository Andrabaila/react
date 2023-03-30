import { FormCardObj } from 'shared/data/types';
import React from 'react';
import FormCard from '../../shared/ui/formCard/FormCard';
import './styles.scss';

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
