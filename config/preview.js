import * as React from 'react';

import { withRtlSwitcher } from './addons/rtl-switcher/decorators';
import { ADDON_INFO as RTL_SWITCHER_ADDON_INFO } from './addons/rtl-switcher/shared';

import { withThemeSwitcher } from './addons/theme-switcher/decorators';
import { ADDON_INFO as THEME_SWITCHER_ADDON_INFO } from './addons/theme-switcher/shared';

// HOOK for set CSS Custom Properties
import '../src/colors.css';

export const globalTypes = {
  theme: THEME_SWITCHER_ADDON_INFO,
  dir: RTL_SWITCHER_ADDON_INFO,
};

export const decorators = [
  withRtlSwitcher,
  withThemeSwitcher,
  (Story, context) => (
    <Story {...context} />
  ),
];

export const parameters = {
  controls: { expanded: true },
  options: { showPanel: false },
};
