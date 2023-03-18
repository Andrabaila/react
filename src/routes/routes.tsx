import App from '../App';
import PageAbout from '../pages/PageAbout';
import PageNotFound from '../pages/PageNotFound';
import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
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
