module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname,
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
