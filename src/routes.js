import React, { Suspense } from 'react';
import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import ErrorBoundary from 'ErrorBoundary';
import FullSpinnerGrow from 'components/Spinner/FullSpinnerGrow';

// Icons
import { BsSpeedometer2 } from 'react-icons/bs';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

import { AuthContext } from 'context/Auth.context';

const Dashboard = React.lazy(() => import('pages/Dashboard'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export const PUBLIC_ROUTES = [
  {
    path: '/login',
    element: React.lazy(() => import('pages/Login')),
  },
  {
    path: '/forbidden',
    element: React.lazy(() => import('pages/Forbidden')),
  },
  {
    path: '/error',
    element: React.lazy(() => import('pages/Error')),
  },
];

export const PRIVATE_ROUTES = [
  {
    label: 'Overview',
    path: '',
    icon: <BsSpeedometer2 />,
    roles: ['administrator', 'staff', 'operation'],
    element: React.lazy(() => import('pages/Dashboard/Overview')),
    childs: [],
    navbar: true,
  },
  {
    label: 'Users',
    path: 'users',
    icon: <BsFillPersonLinesFill />,
    roles: ['staff'],
    element: React.lazy(() => import('pages/Dashboard/Users')),
    childs: [],
    navbar: true,
  },
  {
    label: 'Create User',
    path: 'users/create',
    roles: ['administrator'],
    element: React.lazy(() => import('pages/Dashboard/Users/create')),
    childs: [],
    navbar: false,
  },
  {
    label: 'Activities',
    path: 'activities',
    icon: <FiActivity />,
    roles: ['administrator'],
    element: React.lazy(() => import('pages/Dashboard/Activities')),
    childs: [],
    navbar: true,
  },
  {
    label: 'Profile',
    path: 'profile',
    icon: <BsFillFileEarmarkPersonFill />,
    roles: ['administrator', 'staff', 'operation'],
    element: React.lazy(() => import('pages/Dashboard/Profile')),
    childs: [],
    navbar: false,
  },
];

export default function Routes() {
  const { token } = React.useContext(AuthContext);

  const privateRoute = PRIVATE_ROUTES.map((route, index) => {
    return <Route key={index} path={route.path} element={<route.element />} />;
  });

  const publicRoute = PUBLIC_ROUTES.map((route, index) => {
    if (route.path === '/login') {
      return (
        <Route
          key={index}
          path={route.path}
          element={token ? <Navigate to="/" /> : <route.element />}
        />
      );
    } else {
      return (
        <Route key={index} path={route.path} element={<route.element />} />
      );
    }
  });
  return (
    <ErrorBoundary>
      <Suspense fallback={<FullSpinnerGrow />}>
        <ReactRouterRoutes>
          {publicRoute}
          <Route path="/" element={<Dashboard />}>
            {privateRoute}
          </Route>
          <Route key={99} path="*" element={<NotFound />} />
        </ReactRouterRoutes>
      </Suspense>
    </ErrorBoundary>
  );
}
