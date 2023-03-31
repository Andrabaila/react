import Header from '../../widgets/header';
import React, { useState } from 'react';
import Form from '../../widgets/form';
import FormCardList from '../../widgets/formCardList';
import { FormCardObj } from '../../shared/data/types';

const PageForms: React.FC = () => {
  const [cards, setCards] = useState<FormCardObj[]>([]);
  const addCard = (card: FormCardObj) => {
    setCards((prevCards) => [...prevCards, card]);
  };
  return (
    <>
      <Header />
      <main className="Forms">
        <Form addCard={addCard} />
        <FormCardList cards={cards} />
      </main>
    </>
  );
};

export default PageForms;
