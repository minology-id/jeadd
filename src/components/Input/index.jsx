import React from 'react';

const Input = (props) => {
  const {
    name,
    className,
    marginBottom,
    label,
    placeholder,
    type,
    ...otherProps
  } = props;
  let styleName = `mb-${marginBottom}`;

  if (className) styleName = `${styleName} ${className}`;

  return (
    <div className={styleName}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
};

Input.defaultProps = {
  name: 'name',
  label: 'label',
  placeholder: 'placeholder',
  type: 'text',
  marginBottom: 3,
};

export default Input;
