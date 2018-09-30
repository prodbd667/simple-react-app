const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    inject: true,
});

const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
});

module.exports = {
        mode: 'production',
        entry: ['react-hot-loader/patch', path.join(__dirname, '/src/index.tsx')],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                },
                {
                    test: /\.(scss|sass|css)$/,
                    exclude: /node_modules/,
                    loaders: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[local]___[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.join(__dirname, '/build'),
        },
        plugins: [
            HTMLWebpackPluginConfig,
            DefinePluginConfig,
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
            })
        ],
}