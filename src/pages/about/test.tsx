/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageAbout from '.';

test('renders about-page', () => {
  render(
    <MemoryRouter>
      <PageAbout />
    </MemoryRouter>
  );
  const aboutLink = screen.getByText(/This is About Us page/i);
  expect(aboutLink).toBeInTheDocument();
});
