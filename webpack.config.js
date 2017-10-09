const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    entry: './app.js',
    output: {
        path: distPath,
        filename: 'app.bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {test: /\.png$/, loader: 'file-loader'}
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
            template: './index.html',
            favicon: './favicon.ico',
            title: 'My App',
            files: {
                "css": ["test.css"]
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
