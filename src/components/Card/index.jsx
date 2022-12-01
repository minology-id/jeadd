import React from 'react';

const Card = (props) => {
  const { children, className } = props;
  const styleName = `card ${className}`;

  return <div className={styleName}>{children}</div>;
};

export default Card;
