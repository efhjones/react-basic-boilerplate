// import node module 'path' for __dirname
const path = require('path');

module.exports = {
  // absolute string to the directory that contains the entry files.
  context: path.resolve(__dirname, 'src'),
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/public/assets/js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};