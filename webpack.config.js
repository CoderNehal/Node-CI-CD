const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        main: './app.js'
    },
    output: {
        // path: path.resolve(__dirname, 'dev-build'),
        path: path.resolve(__dirname, 'dev-prod'),
        publicPath: '/',
        filename: 'app.js',
        clean: true
    },
    target: 'node',
    // mode: 'development',
    mode: 'production',
    // devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            }
        })],

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};