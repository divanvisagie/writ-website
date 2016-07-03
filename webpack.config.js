'use strict'
let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: [
    './src/app.js',
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    preLoaders: [{
      // set up standard-loader as a preloader
      test: /\.jsx?$/,
      loader: 'standard',
      exclude: /(node_modules|bower_components)/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: '.',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components']
  }
}
