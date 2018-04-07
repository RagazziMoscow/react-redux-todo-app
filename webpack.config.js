var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  mode: 'development',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }/*,
  externals: {
    'react': 'React'
  }
  */
}