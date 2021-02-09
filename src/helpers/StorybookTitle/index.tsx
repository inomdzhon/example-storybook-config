// [libs]
import * as React from 'react';

// styles
import classes from './index.module.pcss';

export function StorybookTitle({
  className = '',
  ...otherProps
}: React.PropsWithChildren<React.ComponentProps<'h2'>>): React.ReactElement {
  return <h2 {...otherProps} className={`${classes.host} ${className}`} />;
}
