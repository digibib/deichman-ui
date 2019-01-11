module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-pixels-to-rem': {},
    'postcss-preset-env': {
      stage: 1,
    },
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
});
