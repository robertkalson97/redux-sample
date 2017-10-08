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
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'My App',
		  template: 'src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
