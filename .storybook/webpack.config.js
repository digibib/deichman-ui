const path = require('path');

module.exports = (storybookBaseConfig, env) => {
  storybookBaseConfig.module.rules.push(
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

  return storybookBaseConfig;
};
