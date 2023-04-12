/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '.';
import cardsArray from '../../../shared/data/cardsArray';

test('renders card', () => {
  render(
    <MemoryRouter>
      <Card {...cardsArray[0]} />
    </MemoryRouter>
  );
  const altText = screen.getByAltText('card image');
  expect(altText).toBeInTheDocument();
});
