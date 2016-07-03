var express = require('express')
var path = require('path')
var webpackConfig = require('./webpack.config')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var proxyMiddleware = require('http-proxy-middleware')

var devConfig = webpackConfig.devServer
var app = express()
var compiler = webpack(webpackConfig)

app.use(express.static(devConfig.contentBase || __dirname))
app.use(webpackDevMiddleware(compiler, {}))
app.use(webpackHotMiddleware(compiler))

// Set up the proxy.
if (devConfig.proxy) {
  Object.keys(devConfig.proxy).forEach(function (context) {
    app.use(proxyMiddleware(context, devConfig.proxy[context]))
  })
}

if (devConfig.historyApiFallback) {
  console.log('404 responses will be forwarded to /index.html')

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(devConfig.contentBase, 'index.html'))
  })
}

app.listen(devConfig.port || 8080, function () {
  console.log('Development server listening on port ' + devConfig.port)
})
