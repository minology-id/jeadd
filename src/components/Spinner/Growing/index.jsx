import React from 'react';
import helper from 'utils/helper';

const SpinnerGrowing = ({ variant, className }) => {
  let styleName = 'spinner-grow';

  if (variant) styleName = styleName + ` text-${helper.parseVariant(variant)}`;

  if (className) styleName = styleName + ` ${className}`;

  return (
    <div className={styleName} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

SpinnerGrowing.defaultProps = {
  variant: 'primary',
};

export default SpinnerGrowing;
