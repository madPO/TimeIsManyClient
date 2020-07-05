const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

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
      {
        test: /\.css$/i,
        use: [{
          loader: ExtractCssChunks.loader,
          options: {
            publicPath: '../',
          },
        }, 
          'css-loader',
          'postcss-loader'],
      },
      {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          loader: 'url-loader',
          options: {
              limit: 8192,
              name : 'assets/[hash].[ext]'
          },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'wwwroot')
  },
  plugins: [new ExtractCssChunks({
      filename: 'css/[name].bundle.css'
  })]
}];