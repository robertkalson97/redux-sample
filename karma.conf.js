var webpackDevConf = require('./webpack.dev.js');

module.exports = function(config) {
    config.set({
        basePath: '',
        files: [
            {
                pattern: 'src/**/test/*.js',
                watched: true
            }
        ],

        frameworks: ['mocha'],
        browsers: ['PhantomJS'],

        preprocessors: {
            'src/**/test/*.js': ['webpack', 'sourcemap']
        },

        reporters: ['nyan'],

        plugins: [
            require("karma-webpack"),
            require("karma-mocha"),
            require("karma-phantomjs-launcher"),
            require("karma-sourcemap-loader"),
            require("karma-nyan-reporter")
        ],

        nyanReporter: {
            suppressErrorHighlighting: true,
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,

        webpack: webpackDevConf
    });
};