import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

import { PRIVATE_ROUTES } from 'routes';
import Logout from 'components/Dashboard/Logout';

import profile from 'assets/profile.jpeg';

const MobileNavbar = ({ show, setClose, user }) => {
  // Fix background scrolling
  document.getElementById('root').style.overflow = show ? 'hidden' : 'auto';

  let containerStyle = `mn-container bg-dark text-light ${
    show ? 'd-block' : 'd-none'
  }`;

  return (
    <div className={containerStyle}>
      <div
        className="mn-bar text-light d-flex flex-row-reverse"
        onClick={() => setClose()}
      >
        <RxCross2
          className="my-auto mx-3"
          style={{ width: '32px', height: '32px' }}
        />
      </div>
      <div className="mn-profile-container d-flex w-100">
        <div className="mn-profile-box m-auto text-center">
          <div className="mn-profile my-2">
            <img src={profile} style={profileStyle} alt="profile" />
          </div>
          <div className="mn-name fw-semibold lh-1">{`${user.firstName} ${user.lastName}`}</div>
          <div className="mn-role fw-light">{user.roleName}</div>
          <div className="mn-action my-2">
            <span className="mx-2">Profile</span>
            <Logout isDesktop={false} />
          </div>
        </div>
      </div>
      <div className="mn-menu-container">
        {PRIVATE_ROUTES.filter((route) => route.navbar).map((route, index) => (
          <Item
            key={index}
            label={route.label}
            icon={route.icon}
            path={route.path}
            setClose={setClose}
          />
        ))}
      </div>
    </div>
  );
};

const Item = ({ label, icon, path, setClose }) => (
  <li className="nav-item d-flex align-items-center">
    <NavLink
      className="nav-link flex-grow-1 p-3 text-end"
      to={path}
      onClick={setClose}
    >
      <span className="me-2">{icon}</span>
      {label}
    </NavLink>
  </li>
);

const profileStyle = {
  borderRadius: '50%',
  objectFit: 'cover',
  width: '64px',
  height: '64px',
};

export default MobileNavbar;
