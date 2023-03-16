import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from 'routes/routes';
import Header from 'components/Header';

const router = createBrowserRouter(routes);
const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
rootElement.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
