var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: "./entry.js",
	output: {
		path: './dist',
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['','.js','.jsx','.json']
	},
	devtool: 'source-map',
	module: {
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},{
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.less$/,
				include: __dirname + /src/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			},{
				test:/\.scss$/,
				include: __dirname + /src/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
      	new webpack.NoErrorsPlugin(),
      	new ExtractTextPlugin("bundle.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
	]
};

module.exports = config;