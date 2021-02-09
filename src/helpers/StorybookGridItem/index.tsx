// [libs]
import * as React from 'react';
import classNames from 'classnames';

// styles
import classes from './index.module.pcss';

type TStorybookGridItemProps = React.PropsWithChildren<
  React.ComponentProps<'div'> & {
    fullWidth?: boolean;
  }
>;

export function StorybookGridItem({
  fullWidth,
  className,
  ...otherProps
}: TStorybookGridItemProps): React.ReactElement {
  return (
    <div
      className={classNames(
        classes.host,
        {
          [classes.hostFullWidth]: fullWidth,
        },
        className,
      )}
      {...otherProps}
    />
  );
}
