import path = require('path');
import HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, './app/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [   '*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },

    node: { fs: 'empty' },

    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({template: './app/index.html'}),
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        hotOnly: true,
        overlay: true,
        open: true,
    },
};
