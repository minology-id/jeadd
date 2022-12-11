import React from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';

const DeleteModal = ({ open, title, children, onClose, onNext }) => {
  return (
    <Modal
      open={open}
      title={title}
      footer={<Footer onClose={onClose} onNext={onNext} />}
      handleClose={onClose}
    >
      {children}
    </Modal>
  );
};

const Footer = ({ onClose, onNext }) => {
  return (
    <>
      <Button className="btn-primary mx-2" size="sm" onClick={onClose}>
        Cancel
      </Button>
      <Button className="btn-danger mx-2" size="sm" onClick={onNext}>
        Delete
      </Button>
    </>
  );
};

export default DeleteModal;
