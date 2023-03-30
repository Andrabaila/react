import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from 'shared/routes/routes';

const router = createBrowserRouter(routes);
const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
rootElement.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
