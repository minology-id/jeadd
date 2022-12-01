import React from 'react';

import { app } from 'config/app.config';

const Footer = () => {
  return <div className="text-center text-muted ">{app.footer}</div>;
};

export default Footer;
