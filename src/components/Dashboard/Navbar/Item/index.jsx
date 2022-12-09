import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ label, icon, path }) => {
  return (
    <li className="nav-item d-flex align-items-center">
      <NavLink className="nav-link flex-grow-1 p-3" to={path}>
        <span className="me-2">{icon}</span>
        {label}
      </NavLink>
    </li>
  );
};

export default Item;
