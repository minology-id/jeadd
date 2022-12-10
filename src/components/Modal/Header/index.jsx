import React from 'react';

const Header = ({ children, handleClose }) => {
  return (
    <div className="modal-header">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default Header;
