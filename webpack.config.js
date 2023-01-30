//Webpack config for 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/javascript/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dayly',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/styles'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },

    mode: 'development'
}