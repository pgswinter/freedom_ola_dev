const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackChunkHash = require('webpack-chunk-hash');
//const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const publicPath = "./";
const glob = require("glob");

module.exports={
	// devtool: 'inline-source-map',
	entry:{
		'page': glob.sync("./src/js/*.js"),
		// 'uikit': glob.sync("./src/js/fw_ui_kit/*.js")
		//'vendor': glob.sync("./src/js/vendor/*.js"),
	},
	plugins:[
		new ExtractTextPlugin({
			filename: "[name].[contenthash].min.css",
			publicPath: publicPath
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		// new webpack.optimize.CommonsChunkPlugin({ // Prevent Duplication + keep latest verison when CHUNK HASH
	    // 	name: ["vendor", "manifest"], // vendor libs + extracted manifest
  		// 	minChunks: Infinity,
	    // }),
	    // new webpack.HashedModuleIdsPlugin(), // Avoid cache by hashing each modules and inject (assign to) each ID for them - module in module.exports
	    // new WebpackChunkHash(), // Hashing with MD5 standard. It was copied by webpack-md5-hash
	    new HtmlWebpackPlugin({
			filename: 'index.html',
	    	template: 'src/pug/index.pug',
			chunksSortMode: 'dependency'
		}),
		new HtmlWebpackPlugin({
			filename: 'career.html',
	    	template: 'src/pug/career.pug',
			chunksSortMode: 'dependency'
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			_: "lodash"
		})
	],
	output:{
		path: path.join(__dirname, '/builds/app/'),
		// filename: '[name].bundle.js',
		filename: '[name].[contenthash].js',
		publicPath: publicPath
		// sourceMapFilename: '[name].map'
	},
	resolve:{
		extensions: ['.js','.json'],
		modules:[path.join(__dirname, 'src'),'node_modules'],
		alias:{
			jquery: "jquery/src/jquery"
		}
	},
	module: {
		rules:[
			{
			    test: /\.pug$/,
			    use: ['raw-loader', 'pug-html-loader']
			},
			{
				test:/\.js$/,
				use: ['babel-loader','source-map-loader'],
				enforce: "pre"
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
            	test: /\.sass$/,
				use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader?sourceMap'],
                    publicPath: "./build"
                }),
	        },
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			}
		]
	}
}