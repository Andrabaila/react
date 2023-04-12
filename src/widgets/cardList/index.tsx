import Card from '../../shared/ui/card';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import getCharacters from '../../shared/api/getCharacters';
import { CardObj } from './types';

export default function CardList() {
  const [cardsArray, setCardsArray] = useState<CardObj[] | []>([]);
  useEffect(() => {
    const setData = async () => {
      const cardsArray = await getCharacters();
      cardsArray && cardsArray.length ? setCardsArray(await cardsArray) : setCardsArray([]);
    };
    setData();
  }, []);

  const cardsArrayElement = cardsArray.map((cardObj: CardObj) => {
    return <Card key={cardObj.id} {...cardObj} />;
  });

  return (
    <div className="card-list" data-testid="card-list">
      {cardsArrayElement}
    </div>
  );
}
