import * as React from 'react';
import { useGlobals } from '@storybook/api';
import { addons, types } from '@storybook/addons';

import { ADDON_ID } from './shared';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'RTL',
    type: types.TOOL,
    match({ viewMode }) {
      return !!(viewMode && /^(story|docs)$/.test(viewMode));
    },
    render() {
      const [{ dir }, setGlobals] = useGlobals();

      const handleRtlChange = React.useCallback(
        event => {
          setGlobals({ dir: event.target.checked ? 'rtl' : 'ltr' });
        },
        [setGlobals],
      );

      return (
        <div
          style={{ display: 'grid', gridGap: 6, gridTemplateColumns: '100%', alignItems: 'center', userSelect: 'none' }}
        >
          <label>
            <input type="checkbox" name="rtl" checked={dir === 'rtl'} onChange={handleRtlChange} />
            <span>RTL</span>
          </label>
        </div>
      );
    },
  });
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
