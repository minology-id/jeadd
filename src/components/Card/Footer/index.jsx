import React from 'react';

const CardFooter = (props) => {
  const { children, className } = props;
  const styleName = `card-footer ${className}`;

  return <div className={styleName}>{children}</div>;
};

export default CardFooter;
