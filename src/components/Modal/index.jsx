import React from 'react';

import Portal from 'components/Portal';

import Container from 'components/Modal/Container';
import Header from 'components/Modal/Header';
import Body from 'components/Modal/Body';
import Footer from 'components/Modal/Footer';

const Modal = ({
  open,
  children,
  title,
  footer,
  staticBackdrop,
  handleClose,
}) => {
  // Fix scrolling backgorund when modal show up
  document.getElementById('root').style.overflow = open ? 'hidden' : 'auto';

  if (!open) return null;

  return (
    <Portal wrapperId="modal-asdf">
      <div className="modal-bg"></div>
      <Container staticBackdrop={staticBackdrop}>
        {title ? <Header handleClose={handleClose}>{title}</Header> : null}
        <Body>{children}</Body>
        {footer ? <Footer>{footer}</Footer> : null}
      </Container>
    </Portal>
  );
};

Modal.defaultProps = {
  open: false,
  title: false,
  footer: false,
};

export default Modal;
