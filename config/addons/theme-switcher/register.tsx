import * as React from 'react';
import { useGlobals } from '@storybook/api';
import { addons, types } from '@storybook/addons';

import { ADDON_ID, THEMES } from './shared';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Theme',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render() {
      const [{ theme }, setGlobals] = useGlobals();

      const handleThemeChange = React.useCallback(
        event => {
          setGlobals({ theme: event.target.value });
        },
        [setGlobals],
      );

      return (
        <div
          style={{
            display: 'grid',
            gridGap: 6,
            gridTemplateColumns: '50% 50%',
            alignItems: 'center',
            userSelect: 'none',
          }}
        >
          {Object.keys(THEMES).map(key => (
            <label key={key}>
              <input type="radio" name="theme" value={key} checked={theme === key} onChange={handleThemeChange} />
              <span>{`${key.charAt(0).toUpperCase()}${key.substr(1)}`}</span>
            </label>
          ))}
        </div>
      );
    },
  });
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

