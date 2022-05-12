// production config
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const CreateFileWebpack = require('create-file-webpack');

const commonConfig = require('./common');

// Loads .env.local file and injects environment variables
dotenv.config({
    path: path.resolve(__dirname, '../../.env.prod'),
});

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: './index.tsx',
    output: {
        filename: 'js/bundle.[contenthash].min.js',
        path: resolve(__dirname, '../../docs'),
        publicPath: '/ML4CD_site/',
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            IS_DEBUG: process.env.IS_DEBUG,
        }),
        // create a .nojekyll file for github pages
        new CreateFileWebpack({
            path: './docs',
            fileName: '.nojekyll',
            content: '',
        }),
    ],
});
