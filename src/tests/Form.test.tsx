/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageForms from '../pages/PageForms';

test('renders forms page', () => {
  render(
    <MemoryRouter>
      <PageForms />
    </MemoryRouter>
  );
  const titleLabel = screen.getByText(/Title/i);
  expect(titleLabel).toBeInTheDocument();
});
