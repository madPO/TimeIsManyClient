const path = require('path');
const CopyPlugin = require('copy-webpack-plugin'); 

module.exports = [{
  entry: {
    core: "./src/core.index.ts",
    ui: "./src/ui.index.ts"
  },
  devtool: 'inline-source-map',
  mode: 'development',
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'wwwroot/scripts')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'asset'), to: path.resolve(__dirname, 'wwwroot/asset') }
      ],
    }),
  ],
}];