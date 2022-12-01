import React from 'react';

import { app } from 'config/app.config';

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <h1 className="navbar-brand d-none d-lg-block col-md-3 col-lg-2 me-0 px-3 fs-5">
        {app.name}
      </h1>
      <h1 className="navbar-brand d-block d-lg-none col-md-3 col-lg-2 mx-auto px-3 fs-5">
        {app.name}
      </h1>
    </header>
  );
};

export default Header;
