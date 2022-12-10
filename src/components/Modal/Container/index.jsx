import React from 'react';

const Container = ({ children, staticBackdrop }) => {
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      data-bs-backdrop={staticBackdrop ? 'static' : ''}
      //   aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

Container.defaultProps = {
  staticBackdrop: false,
};

export default Container;
