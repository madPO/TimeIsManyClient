const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    compress: true,
    port: 8083,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:  path.resolve(__dirname, 'assets')
  }
};