import React from 'react';

import Item from 'components/Dashboard/Navbar/Item';

import { PRIVATE_ROUTES } from 'routes';

const Navbar = () => {
  return (
    <nav className="d-none d-lg-flex bg-light">
      <div className="position-sticky pt-4">
        <ul className="nav navbar-nav flex-column">
          {PRIVATE_ROUTES.map((item, key) => {
            if (item.navbar) return <Item key={key} {...item} />;

            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
