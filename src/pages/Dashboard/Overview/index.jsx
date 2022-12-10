import React from 'react';

import ContentContainer from 'components/Dashboard/ContentContainer';

import Modal from 'components/Modal';

const Overview = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <ContentContainer>
      Overview
      <button
        className="btn btn-sm btn-primary m-3"
        onClick={() => setOpen(true)}
      >
        Click Me
      </button>
      <Modal title="Test Title" open={open} handleClose={() => setOpen(false)}>
        This is test modal
      </Modal>
    </ContentContainer>
  );
};

export default Overview;
