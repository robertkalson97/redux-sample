const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    entry: './index.js',
    output: {
        path: distPath,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                include: srcPath,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                include: srcPath,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './favicon.ico',
            title: 'My App'
        })
    ]
};
