import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="content-box-container d-flex flex-column">{children}</div>
  );
};

export default Content;
