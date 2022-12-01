import React from 'react';
import helper from 'utils/helper';

const Container = (props) => {
  const { children, responsive, className, ...otherProps } = props;
  let styleName = 'main-container d-flex flex-column gx-0 container';

  if (responsive)
    styleName = `${styleName}-${helper.parseContainerResponsive(
      responsive
    )} ${className}`;

  return (
    <div className={styleName} style={{ height: '100vh' }} {...otherProps}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  children: 'Row Grid',
  responsive: false,
};

export default Container;
