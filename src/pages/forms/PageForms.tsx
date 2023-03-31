import Header from '../../widgets/header';
import React from 'react';
import Form from '../../widgets/form/Form';
import FormCardList from '../../widgets/formCardList/FormCardList';
import { FormCardObj } from '../../shared/data/types';

export default class PageForms extends React.Component<
  Record<string, never>,
  { cards: FormCardObj[] }
> {
  state = { cards: [] };
  addCard = (card: FormCardObj) => {
    this.setState((prev) => ({ cards: [...prev.cards, card] }));
  };
  render() {
    return (
      <>
        <Header />
        <main className="Forms">
          <Form addCard={this.addCard} />
          <FormCardList cards={this.state.cards} />
        </main>
      </>
    );
  }
}
