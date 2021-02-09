module.exports = () => {
  const plugins = [
    require('postcss-nested'),
    [
      require('postcss-preset-env'),
      {
        stage: 2,
        features: {},
        autoprefixer: true,
        browsers: [
          'Chrome >= 67', // NOTE: For work css logical properties.
          'last 1 firefox version',
          'last 1 safari version',
        ],
      },
    ],
  ];

  return { plugins };
};
