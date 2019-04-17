module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-pixels-to-rem': {},
      'postcss-responsive-type': {},
      'postcss-preset-env': {
        stage: 1,
        features: {
          'custom-media-queries': {
            importFrom: 'src/breakpoints.css',
            preserve: true,
          },
        },
      },
      autoprefixer: {},
      cssnano: {},
    },
  };
};
