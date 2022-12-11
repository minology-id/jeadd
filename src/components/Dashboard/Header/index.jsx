import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { app } from 'config/app.config';
import { PROFILE_MENU } from 'routes';

import MobileNavbar from 'components/Dashboard/MobileNavbar';
import Logout from 'components/Dashboard/Logout';

import profile from 'assets/profile.jpeg';
import logo from 'assets/logo.png';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const [showMobile, setShowMobile] = React.useState(false);

  const onCloseMobile = () => {
    setShowMobile(false);
  };

  const onOpenMobile = () => {
    setShowMobile(true);
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap py-0 px-3 shadow">
      <div
        className="d-block d-lg-none text-light"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft style={{ height: '32px', width: '32px' }} />
      </div>
      <div className="navbar-brand d-none d-lg-block">
        <img src={logo} alt="Your company logo" style={{ height: '40px' }} />
      </div>
      <h1 className="navbar-brand flex-grow-1 d-none d-lg-block col-md-3 col-lg-2 me-0 fs-5">
        {app.name}
      </h1>
      <h1 className="navbar-brand d-block d-lg-none col-md-3 col-lg-2 mx-auto my-auto fs-5">
        {app.name}
      </h1>
      <div className="d-block d-lg-none text-light" onClick={onOpenMobile}>
        <AiOutlineMenu style={{ height: '32px', width: '32px' }} />
      </div>
      <div className="dropdown d-none d-lg-block">
        <div
          className="d-flex dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ cursor: 'pointer' }}
        >
          <Profile src={profile} alt="user profile" className="m-auto mx-2" />
          <div className="d-flex flex-column text-light mx-2">
            <ProfileName
              firstName={user?.firstName}
              lastName={user?.lastName}
            />
            <ProfileRole>{user?.roleName}</ProfileRole>
          </div>
        </div>
        <ul className="dropdown-menu">
          {PROFILE_MENU.map((item, index) => {
            if (item.path) {
              return (
                <LiLink key={index} path={item.path}>
                  {item.label}
                </LiLink>
              );
            } else {
              return <LiComponent key={index}>{item.component}</LiComponent>;
            }
          })}
          <li key={99}>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
      <MobileNavbar show={showMobile} setClose={onCloseMobile} user={user} />
    </header>
  );
};

const profileStyle = {
  borderRadius: '50%',
  objectFit: 'cover',
  width: '40px',
  height: '40px',
};

const Profile = ({ src, className, alt }) => (
  <img src={src} style={profileStyle} alt={alt} className={className} />
);

const ProfileName = ({ firstName, lastName }) => (
  <span className="user-select-none lh-1">{`${firstName} ${lastName}`}</span>
);

ProfileName.defaultProps = {
  firstName: '',
  lastName: '',
};

const ProfileRole = ({ children }) => (
  <span className="fw-light text-capitalize user-select-none">{children}</span>
);

ProfileRole.defaultProps = {
  children: '',
};

const LiLink = ({ children, path }) => (
  <li>
    <Link className="dropdown-item user-select-none" to={path}>
      {children}
    </Link>
  </li>
);

const LiComponent = ({ children }) => <li>{children}</li>;

export default Header;
