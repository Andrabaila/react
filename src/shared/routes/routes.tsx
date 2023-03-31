import App from '../../app/App';
import PageAbout from '../../pages/about/PageAbout';
import PageNotFound from '../../pages/404/PageNotFound';
import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import PageForms from '../../pages/forms';

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
    path: 'forms',
    element: <PageForms />,
  },
  {
    path: '/404',
    element: <PageNotFound />,
  },
];
