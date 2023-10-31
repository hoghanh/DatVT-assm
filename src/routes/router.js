import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Schedule from '../pages/Schedule';

export const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
  },
];

const Router = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map(({ path, element }) =>
          path === '/login' ? (
            <Route key={path} path={path} element={element} exact />
          ) : (
            <Route key={path} path={path} element={<DefaultLayout />}>
              <Route path={path} element={element} exact />
            </Route>
          )
        )}
      </Routes>
    </Suspense>
  );
};

export default Router;
