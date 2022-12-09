import React from 'react';

export default function useTracer(name, target) {
  React.useEffect(() => {
    console.log({
      name,
      target,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
}
