import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from 'shared/routes/routes';
import store from './shared/model/store';

const router = createBrowserRouter(routes);
const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
