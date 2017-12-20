const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'node_modules/@bower_components')
    ]
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: 'css-loader' 
      },
      { 
        test: /\.html$/, 
        loader: 'polymer-webpack-loader', 
        options: { 
          processStyleLinks: true 
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: false
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'node_modules/@bower_components/webcomponentsjs/*.js'),
      to: 'bower_components/webcomponentsjs/[name].[ext]'
    }])
  ]
};