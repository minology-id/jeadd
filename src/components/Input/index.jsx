import React from 'react';

const Input = ({
  name,
  className,
  marginBottom,
  label,
  placeholder,
  type,
  register,
  errors,
  ...otherProps
}) => {
  let styleName = `mb-${marginBottom} has-validation`;
  let inputStyle = `form-control`;

  if (className) styleName = `${styleName} ${className}`;

  if (errors[name]?.message) inputStyle = `${inputStyle} is-invalid`;

  if (register) {
    return (
      <div className={styleName}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className={inputStyle}
          id={name}
          name={name}
          placeholder={placeholder}
          {...register(name)}
          {...otherProps}
        />
        {errors[name]?.message ? (
          <InvalidFeedback>{errors[name]?.message}</InvalidFeedback>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className={styleName}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className={inputStyle}
          id={name}
          name={name}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    );
  }
};

Input.defaultProps = {
  name: 'name',
  label: 'label',
  placeholder: 'placeholder',
  type: 'text',
  marginBottom: 3,
  register: false,
  errors: false,
};

const InvalidFeedback = ({ children }) => (
  <div className="invalid-feedback d-block">{children}</div>
);

export default Input;
