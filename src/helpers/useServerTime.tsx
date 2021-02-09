import * as React from 'react';

function getCurrentTime(): number {
  return Date.now() / 1000;
}

export function useServerTime(): number {
  const tickId = React.useRef(-1);
  const [severTime, setServerTime] = React.useState(getCurrentTime);

  React.useEffect(() => {
    tickId.current = window.setInterval(() => {
      setServerTime(getCurrentTime());
    }, 1000);

    return () => {
      window.clearInterval(tickId.current);
    };
  }, []);

  return severTime;
}
