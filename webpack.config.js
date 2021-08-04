var path = require('path');
var DIST_DIR = path.join(__dirname, '/client/dist');
var SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  mode: 'development',
  devtool: process.env.NODE_ENV === 'development' ? "inline-source-map" : "source-map",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            "plugins": [
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
};