const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const publicPath = "./";

module.exports = Merge(CommonConfig, {
	// devtool: "cheap-module-source-map",
	// entry: [
 //        './src/components/gallery/modules/index.js',
 //        'webpack/hot/dev-server',
 //        'webpack-dev-server/client?http://localhost:6969'
 //    ],
	output:{
		// path: path.join(__dirname,'./dist/assets'), // Set URL store from local folder
		path: path.join(__dirname,'/builds/app/'), // Set URL store from local folder
		filename: '[name].bundle.js',
		publicPath: publicPath, // Permisson access at URL
		// sourceMapFilename: '[name].map'
	},
	devServer:{
		contentBase: path.join(__dirname,'/builds/app/'),
		compress: true,
		starts: "error-only",
		open: true
	}
})