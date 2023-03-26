import Header from '../components/Header';
import React from 'react';
import Form from '../components/Form';
import FormCardList from '../components/FormCardList';
import { FormCardObj } from '../data/types';

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
