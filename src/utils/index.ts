import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

export type TComponentGroup = 'inputs' | 'navigation' | 'data_display' | 'utils' | 'feedback' | 'assets';

function getGroupHumanizedName(name: TComponentGroup): string {
  switch (name) {
    case 'inputs':
      return 'Inputs';
    case 'navigation':
      return 'Navigation';
    case 'data_display':
      return 'Data Display';
    case 'utils':
      return 'Utils';
    case 'feedback':
      return 'Feedback';
    case 'assets':
      return 'Assets';
  }
}

export function exportAs(
  component: string | Exclude<Meta['component'], React.Component | undefined>,
  scope: TComponentGroup | null,
  config?: Omit<Meta, 'component' | 'title'>,
): Meta {
  if (typeof component === 'string') {
    return {
      title: scope !== null ? `${getGroupHumanizedName(scope)}/${component}` : component,
      ...config,
    };
  }

  return {
    component,
    title:
      scope !== null
        ? `${getGroupHumanizedName(scope)}/${component.displayName || component.name}`
        : component.displayName || component.name,
    ...config,
  };
}

export function withTemplate<T extends React.ComponentType<React.ComponentProps<T>>>(
  component: T,
): Story<React.ComponentProps<T>> {
  return (props: React.ComponentProps<T>) => React.createElement(component, props);
}
