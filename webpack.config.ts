const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/app.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        modules: [path.join(__dirname, 'app'), path.join(__dirname, 'node_modules')],
    },

    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts)x?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({template: './app/index.html'}),
    ],

    devServer: {
        port: 3000,
        hot: true,
        contentBase: './build'
    },
};