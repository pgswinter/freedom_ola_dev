// import express from 'express'

var express = require('express');

var config = require('./webpack.dev.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath:config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'pug');

app.use(express.static("builds/app/")) // Set current patch inside the folder

app.listen(6969,'localhost', () => {
	console.log('Express listening on port', 6969)
})