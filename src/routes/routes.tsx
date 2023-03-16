import App from 'App';
import PageAbout from 'pages/PageAbout';
import PageNotFound from 'pages/PageNotFound';
import React from 'react';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'about',
    element: <PageAbout />,
  },
];
