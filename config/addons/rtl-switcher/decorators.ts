import * as React from 'react';
import { StoryFn as StoryFunction, StoryContext } from '@storybook/addons';

export const withRtlSwitcher = (StoryFn: StoryFunction, context: StoryContext): ReturnType<StoryFunction> => {
  const selector = context.viewMode === 'docs' ? `#anchor--${context.id} .docs-story` : '.sb-show-main';

  React.useEffect(() => {
    const elFrame = document.querySelector<HTMLElement>(selector);

    if (!elFrame) {
      return;
    }

    elFrame.dir = context.globals.dir;
  }, [context.globals.dir, selector]);

  return StoryFn(context);
};
