/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../routes/routes';

describe('App', () => {
  const router = createBrowserRouter(routes);
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);
  const root = ReactDOM.createRoot(rootElement);
  it('renders without crashing', () => {
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
    expect(rootElement).toBeTruthy();
  });
});
