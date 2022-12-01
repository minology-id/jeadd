import React from 'react';
import helper from 'utils/helper';

const SpinnerBorder = (props) => {
  const { variant } = props;
  let styleName = 'spinner-border';

  if (variant) styleName = styleName + ` text-${helper.parseVariant(variant)}`;

  return (
    <div className={styleName} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

SpinnerBorder.defaultProps = {
  variant: 'primary',
};

export default SpinnerBorder;
