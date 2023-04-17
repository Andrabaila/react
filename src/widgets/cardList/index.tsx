import Card from '../../shared/ui/card';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import getCharacters from '../../shared/api/getCharacters';
import { CardObj } from './types';
import { useAppDispatch } from 'shared/model/store';
import { useGetCharactersQuery } from '../../shared/model/reducers/pageMain';

export default function CardList() {
  /*const [cardsArray, setCardsArray] = useState<CardObj[] | []>([]);
  useEffect(() => {
    const setData = async () => {
      const cardsArray = await getCharacters();
      cardsArray && cardsArray.length ? setCardsArray(await cardsArray) : setCardsArray([]);
    };
    setData();
  }, []);
*/

  const { data: cardsArray, isError } = useGetCharactersQuery('');
  /*const cardsArrayElement =
    cardsArray &&
    cardsArray.map((cardObj: CardObj) => {
      return <Card key={cardObj.id} {...cardObj} />;
    });*/

  return !cardsArray ? (
    <div>Error</div>
  ) : (
    <div className="card-list" data-testid="card-list">
      {cardsArray.map((cardObj: CardObj) => {
        return <Card key={cardObj.id} {...cardObj} />;
      })}
    </div>
  );
}
