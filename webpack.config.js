const path = require('path')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['./src/scss'],
          },
        },
      ],
    }, ],
  },
}
