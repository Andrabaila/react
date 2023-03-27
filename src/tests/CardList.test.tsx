/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageMain from '../pages/PageMain';

test('renders card-list', () => {
  render(
    <MemoryRouter>
      <PageMain />
    </MemoryRouter>
  );
  const testId = screen.getByTestId('card-list');
  expect(testId).toBeInTheDocument();
});
