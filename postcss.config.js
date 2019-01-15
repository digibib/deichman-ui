module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-pixels-to-rem': {},
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
});
