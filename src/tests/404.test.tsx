/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';

test('renders 404 page', () => {
  render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  );
  const notFound = screen.getByText(/Page not found/i);
  expect(notFound).toBeInTheDocument();
});
