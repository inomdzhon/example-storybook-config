const path = require('path');

const CUSTOM_ADDONS = [
  path.resolve(__dirname, 'addons/theme-switcher/register'),
  path.resolve(__dirname, 'addons/rtl-switcher/register'),
];

module.exports = {
  stories: ['../**/*.stories.tsx', '../**/*.stories.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls', ...CUSTOM_ADDONS],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      propFilter(prop) {
        return prop.parent ? !prop.parent.fileName.includes('node_modules') : true;
      },
    },
  },

  /**
   * Extend webpack for:
   * - Support CSS Modules.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.module\.pcss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:2]-[name]-[local]',
            },
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    config.resolve.extensions.push('.module.pcss');

    if (config.resolve.alias) {
      config.resolve.alias = {};
    }

    return config;
  },
};
