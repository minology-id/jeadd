import React from 'react';

import { AuthContext } from 'context/Auth.context';

import Item from 'components/Dashboard/Navbar/Item';

import { PRIVATE_ROUTES } from 'routes';

const Navbar = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <nav className="d-none d-lg-flex bg-light">
      <div className="position-sticky pt-4">
        <ul className="nav navbar-nav flex-column">
          {PRIVATE_ROUTES.filter((r) => r.roles.includes(user.roleName)).map(
            (item, key) => {
              if (item.navbar) return <Item key={key} {...item} />;

              return null;
            }
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
