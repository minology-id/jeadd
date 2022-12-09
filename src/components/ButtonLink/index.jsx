import React from 'react';
import { Link } from 'react-router-dom';
import { utils } from 'utils';

const Button = ({
  children,
  variant,
  size,
  to,
  disabled,
  outlined,
  type,
  className,
  loading,
}) => {
  let styleName = 'btn align-items-center btn';

  if (outlined) styleName = styleName + '-outline';
  if (variant) styleName = styleName + `-${utils.helper.parseVariant(variant)}`;
  if (size)
    styleName = styleName + ` btn-${utils.helper.parseButtonSize(size)}`;
  if (className) styleName = `${styleName} ${className}`;

  return (
    <Link
      type={utils.helper.parseButtonType(type)}
      className={styleName}
      to={to}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : null}
      {children}
    </Link>
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
  to: '/',
};

export default Button;
