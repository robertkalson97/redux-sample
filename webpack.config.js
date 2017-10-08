const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const dirPath = path.resolve(__dirname, 'dist');

module.exports = {
	entry : './src/app.js',
	output : {
		path : dirPath, 
		filename : 'app.bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: dirPath,
		port: 3000,
		hot: true
    },
	module: {
		loaders: [
		{
			test: /\.html$/,
			loader: 'html-loader'
		}
		],
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, 
				loader: "babel-loader"
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			template: 'src/index.html',
			files: {
				"css": [ "test.css" ]
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
