const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/index.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  jshint: {
    esversion: 6
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  }
};
