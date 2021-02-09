import * as React from 'react';
import { StoryFn as StoryFunction, StoryContext } from '@storybook/addons';

import { getThemeName } from './shared';

export const withThemeSwitcher = (StoryFn: StoryFunction, context: StoryContext): ReturnType<StoryFunction> => {
  const selector = context.viewMode === 'docs' ? `#anchor--${context.id} .docs-story` : '.sb-show-main';

  React.useEffect(() => {
    const elFrame = document.querySelector<HTMLElement>(selector);

    if (!elFrame) {
      return;
    }

    elFrame.dataset.theme = getThemeName(context.globals.theme);
  }, [context.globals.theme, selector]);

  return StoryFn(context);
};
