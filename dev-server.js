'use strict'
let express = require('express')
let path = require('path')
let webpackConfig = require('./webpack.config')
let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let proxyMiddleware = require('http-proxy-middleware')

let devConfig = webpackConfig.devServer
let app = express()
let compiler = webpack(webpackConfig)

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
