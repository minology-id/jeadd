/**
 * routes define by js object with properties :
 * - label      show on navigation
 * - path       path url
 * - icon       icon visible on navigation
 * - roles      who roles is allowed to access this page
 * - element    page component
 * - childs     sub menu. Properties are same as parents object
 * - navbar     if true, then this will visible to navbar
 */

// Public routes
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Forbidden from 'pages/Forbidden';
import ErrorCrash from 'pages/Error';

// Dashboard pages
import Dashboard from 'pages/Dashboard';
import Overview from 'pages/Dashboard/Overview';
import Users from 'pages/Dashboard/Users';
import Activities from 'pages/Dashboard/Activities';
import Profile from 'pages/Dashboard/Profile';

// Icons
import { BsSpeedometer2 } from 'react-icons/bs';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

export const PRIVATE_ROUTES = [
  {
    label: 'Overview',
    path: '',
    icon: <BsSpeedometer2 />,
    roles: ['administrator', 'staff', 'operation'],
    element: <Overview />,
    childs: [],
    navbar: true,
  },
  {
    label: 'Users',
    path: 'users',
    icon: <BsFillPersonLinesFill />,
    roles: ['staff'],
    element: <Users />,
    childs: [],
    navbar: true,
  },
  {
    label: 'Activities',
    path: 'activities',
    icon: <FiActivity />,
    roles: ['administrator'],
    element: <Activities />,
    childs: [],
    navbar: true,
  },
  {
    label: 'Profile',
    path: 'profile',
    icon: <BsFillFileEarmarkPersonFill />,
    roles: ['administrator', 'staff', 'operation'],
    element: <Profile />,
    childs: [],
    navbar: false,
  },
];

export const PUBLIC_ROUTES = [
  {
    label: 'Login',
    path: '/login',
    icon: null,
    roles: [],
    element: <Login />,
    childs: [],
  },
  {
    label: '404',
    path: '/not-found',
    icon: null,
    roles: [],
    element: <NotFound />,
    childs: [],
  },
  {
    label: '403',
    path: '/forbidden',
    icon: null,
    roles: [],
    element: <Forbidden />,
    childs: [],
  },
  {
    label: 'System Crash',
    path: '/crash',
    icon: null,
    roles: [],
    element: <ErrorCrash />,
    childs: [],
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: null,
    roles: [],
    element: <Dashboard />,
    childs: PRIVATE_ROUTES,
  },
];
