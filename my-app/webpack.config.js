const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_EVN = process.env.NODE_EVN;
const IS_DEV = NODE_EVN === 'development';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_EVN ? NODE_EVN : 'development',
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.relative(__dirname, 'index.html')})
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
    },
}