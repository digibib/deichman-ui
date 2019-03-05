const path = require('path');

module.exports = ({ config, mode }) => {
  // Remove existing css rules
  const newRules = config.module.rules
    .filter(r => !r.test.test('.css'))
    .filter(r => !r.test.test('.svg'));

  // Add new rules
  newRules.push(
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(jpg|png|gif|eot|ttf|woff|woff2)$/,
      use: ['file-loader'],
    },
    {
      test: /\.svg$/,
      loader: 'svg-url-loader',
      options: {
        noquotes: true,
      },
    },
  );

  config.module.rules = newRules;

  return config;
};
