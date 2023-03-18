/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('renders header links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const aboutLink = screen.getByText(/about Us/i);
  expect(aboutLink).toBeInTheDocument();
});
