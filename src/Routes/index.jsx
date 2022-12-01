import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTES } from './routes';

import { AuthContext } from 'context/Auth.context';

const Router = () => {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  const pageRoutes = PUBLIC_ROUTES.map(({ path, label, element, childs }) => {
    if (childs.length === 0)
      return <Route key={label} path={path} element={element} />;

    const childRoutes = childs.map((child, key) => {
      return <Route key={key} path={child.path} element={child.element} />;
    });

    return (
      <Route key={label} path={path} element={element}>
        {childRoutes}
      </Route>
    );
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
