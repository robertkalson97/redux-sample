const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        hot: true,
        stats: 'none',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});