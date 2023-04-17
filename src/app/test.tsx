/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../shared/model/store';

test('renders header links', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const aboutLink = screen.getByText(/about Us/i);
  expect(aboutLink).toBeInTheDocument();
});
