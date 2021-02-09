// [libs]
import * as React from 'react';
import classNames from 'classnames';

// styles
import classes from './index.module.pcss';

type TStorybookGridProps = React.PropsWithChildren<
  React.ComponentProps<'div'> & {
    flexDirection?: 'row' | 'column';
  }
>;

export function StorybookGrid({
  flexDirection = 'row',
  className,
  ...otherProps
}: TStorybookGridProps): React.ReactElement {
  return (
    <div
      className={classNames(
        classes.host,
        {
          [classes.hostFlexDirectionRow]: flexDirection === 'row',
          [classes.hostFlexDirectionColumn]: flexDirection === 'column',
        },
        className,
      )}
      {...otherProps}
    />
  );
}
