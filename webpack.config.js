const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	watch: true,
	devtool: 'inline-source-map',
	entry : './src/app.js',
	output : {
		path : path.resolve(__dirname, 'dist'), 
		filename : 'app.bundle.js'
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
		})
	]
};
