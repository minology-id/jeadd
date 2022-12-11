import React from 'react';
import { utils } from 'utils';

const Button = ({
  children,
  variant,
  size,
  onClick,
  disabled,
  outlined,
  type,
  className,
  loading,
  ...otherProps
}) => {
  let styleName = 'btn align-items-center btn';

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
      {...otherProps}
    >
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
};

const Spinner = () => {
  return (
    <span
      className="spinner-grow spinner-grow-sm me-2"
      role="status"
      aria-hidden="true"
    ></span>
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
