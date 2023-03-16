import App from 'App';
import PageAbout from 'pages/PageAbout';
import PageNotFound from 'pages/PageNotFound';
import React from 'react';

export const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <PageAbout />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
