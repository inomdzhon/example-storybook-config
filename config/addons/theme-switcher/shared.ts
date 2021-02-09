export const ADDON_ID = 'storybook/theme-switcher';

export const THEMES = {
  dark: 'dark',
  light: 'light',
};

export function getThemeName(theme: keyof typeof THEMES): string {
  return THEMES[theme] || Object.values(THEMES)[0];
}

export const ADDON_INFO = {
  name: 'Theme Switcher',
  description: 'Global theme for components',
  defaultValue: Object.keys(THEMES)[0],
};
