module.exports = ({ file, options, env, foo }) => {
  return {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-pixels-to-rem': {},
      'postcss-responsive-type': {},
      'postcss-preset-env': {
        stage: 1,
        importFrom: 'src/variables.css',
        features: {
          'custom-media-queries': {
            importFrom: 'src/breakpoints.css',
            preserve: true,
          },
          autoprefixer: {
            grid: true,
            browsers: ['> 1%', 'IE 11'],
          },
        },
      },
      cssnano: {},
    },
  };
};
