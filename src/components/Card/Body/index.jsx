import React from 'react';

const CardBody = (props) => {
  const { children } = props;

  return <div className="card-body">{children}</div>;
};

export default CardBody;
