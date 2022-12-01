import React from 'react';

const CardHeader = (props) => {
  const { children, className } = props;
  const styleName = `card-header ${className}`;

  return <div className={styleName}>{children}</div>;
};

export default CardHeader;
