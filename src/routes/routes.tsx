import App from 'App';
import PageAbout from 'pages/PageAbout';
import PageNotFound from 'pages/PageNotFound';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to="/404" replace />,
  },
  {
    path: 'about',
    element: <PageAbout />,
  },
  {
    path: '/404',
    element: <PageNotFound />,
  },
];
