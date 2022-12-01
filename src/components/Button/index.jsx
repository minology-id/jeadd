import React from 'react';
import { utils } from 'utils';

import SPinnerGrowing from 'components/Spinner/Growing';

const Button = (props) => {
  const {
    children,
    variant,
    size,
    onClick,
    disabled,
    outlined,
    type,
    className,
    loading,
  } = props;
  let styleName = 'btn btn';

  if (outlined) styleName = styleName + '-outline';
  if (variant) styleName = styleName + `-${utils.helper.parseVariant(variant)}`;
  if (size)
    styleName = styleName + ` btn-${utils.helper.parseButtonSize(size)}`;
  if (className) styleName = `${styleName} ${className}`;

  return (
    <button
      type={utils.helper.parseButtonType(type)}
      className={styleName}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <SPinnerGrowing /> : null}
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'lg',
  disabled: false,
  outlined: false,
  type: 'button',
  loading: false,
};

export default Button;
