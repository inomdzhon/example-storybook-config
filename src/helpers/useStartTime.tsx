import * as React from 'react';

function getCurrentTimeWithOffset(): number {
  const date = new Date();

  date.setDate(date.getDate() + 1);
  date.setHours(date.getHours() + 1);
  date.setMinutes(date.getMinutes() + 2);
  date.setSeconds(date.getSeconds() + 1);

  return Number(date) / 1000;
}

/**
 * @param {number} initial – seconds
 */
export function useStartTime(initial?: number): number {
  const [startTime] = React.useState(() => {
    return initial ? initial : getCurrentTimeWithOffset();
  });

  // React.useEffect(() => {
  //   setStartTime(initial);
  // }, []);

  return startTime;
}
