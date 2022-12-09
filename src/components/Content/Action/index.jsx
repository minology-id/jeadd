import React from 'react';

import Card from 'components/Card';

const Action = ({ children, className }) => {
  let styleName = 'd-flex flex-row justify-content-end py-2 px-1 my-2';

  if (className) styleName = styleName + ` ${className}`;
  return <Card className={styleName}>{children}</Card>;
};

export default Action;
