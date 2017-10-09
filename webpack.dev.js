const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true
    },
    plugins: [
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});