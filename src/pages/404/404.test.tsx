/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

test('renders 404 page', () => {
  render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  );
  const notFound = screen.getByText(/Sorry, there is no such page/i);
  expect(notFound).toBeInTheDocument();
});
