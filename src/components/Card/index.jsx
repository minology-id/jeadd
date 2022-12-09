import React from 'react';

const Card = ({ children, className }) => {
  const styleName = `card ${className}`;

  return <div className={styleName}>{children}</div>;
};

export default Card;
