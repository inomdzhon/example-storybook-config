// [libs]
import * as React from 'react';

export const StorybookToggle = React.forwardRef<
  HTMLLabelElement,
  Omit<React.ComponentProps<'label'>, 'onChange'> & { onChange?(checked: boolean): void }
>(({ defaultChecked, children, onChange, ...otherProps }, ref) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (onChange) {
      onChange(event.target.checked);
    }
  }

  return (
    <label ref={ref} {...otherProps}>
      <input id="flip-option" type="checkbox" onChange={handleChange} defaultChecked={defaultChecked} />
      {children}
    </label>
  );
});
