import React from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, wrapperId = 'react-portal-wrapper' }) => {
  const [wrapperElement, setWrapperElement] = React.useState(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = generateWrapper(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

function generateWrapper(wrapperId) {
  const wrapperElement = document.createElement('div');

  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
}

export default Portal;
