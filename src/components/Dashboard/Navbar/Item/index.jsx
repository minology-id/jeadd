import React from 'react';

const Item = ({ label, icon }) => {
  return (
    <li className="nav-item d-flex ps-3 align-items-center">
      <span className="me-2">{icon}</span>
      {label}
    </li>
  );
};

export default Item;
