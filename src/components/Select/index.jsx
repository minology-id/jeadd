import React from 'react';

const Select = ({
  options,
  name,
  placeholder,
  label,
  register,
  marginBottom,
}) => {
  let styleName = 'form-select';
  let containerStyleName = `mb-${marginBottom}`;

  if (register) {
    return (
      <div className={containerStyleName}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select
          className={styleName}
          id={name}
          placeholder={placeholder}
          aria-label="Default select"
          {...register(name)}
        >
          {options.map((opt, index) => (
            <Options key={index} value={opt.value}>
              {opt.label}
            </Options>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className={containerStyleName}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select
          className={styleName}
          id={name}
          placeholder
          aria-label="Default select"
        >
          {options.map((opt, index) => (
            <Options key={index} value={opt.value}>
              {opt.label}
            </Options>
          ))}
        </select>
      </div>
    );
  }
};

Select.defaultProps = {
  options: [],
  register: false,
  name: 'select name',
  placeholder: 'select placeholder',
  marginBottom: 3,
};

const Options = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export default Select;
