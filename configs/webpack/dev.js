// development config
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// Loads .env.local file and injects environment variables
dotenv.config({
    path: path.resolve(__dirname, '../../.env.dev'),
});

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch', // activate HMR for React
        'webpack-dev-server/client?https://localhost:8080', // bundle the client for webpack-dev-server and connect to the provided endpoint
        './index.tsx', // the entry point of our app
    ],
    output: {
        path: resolve(__dirname, '../../dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
        open: true,
        https: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            IS_DEBUG: process.env.IS_DEBUG,
        }),
    ],
});
