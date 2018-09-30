const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const dev = process.env.NODE_ENV !== 'production';

// const env = process.env.NODE_ENV;

// const devConfig = require('./webpack/webpack.config.dev')();
// const prodConfig = require('./webpack/webpack.config.prod')();

// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//     template: 'index.html',
//     filename: 'index.html',
//     inject: true,
// });

// const DefinePluginConfig = new webpack.DefinePlugin({
//     'process.env.NODE_ENV': JSON.stringify('production'),
// });


// module.exports = function (env) {
//     if (env === 'production') {
//         return prodConfig;
//     }
//     if (env === 'development') {
//         return devConfig;
//     }
// };


// module.exports = {
//     devServer: {
//         host: 'localhost',
//         port: '3000',
//         hot: true,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         },
//         historyApiFallback: true,
//     },
//     entry: ['react-hot-loader/patch', path.join(__dirname, '/src/index.tsx')],
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 loader: 'babel-loader',
//             },
//             {
//                 enforce: 'pre',
//                 test: /\.js$/,
//                 loader: 'source-map-loader',
//             },
//             {
//                 test: /\.(scss|sass|css)$/,
//                 exclude: /node_modules/,
//                 loaders: [
//                     MiniCssExtractPlugin.loader,
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true,
//                             sourceMap: true,
//                             importLoaders: 1,
//                             localIdentName: '[local]___[hash:base64:5]'
//                         }
//                     },
//                     'sass-loader'
//                 ],
//             },
//             {
//                 test: /\.(jpe?g|png|gif|svg)$/i,
//                 loader: 'url-loader',
//                 options: {
//                     limit: 10000,
//                 },
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js'],
//     },
//     output: {
//         filename: 'index.js',
//         path: path.join(__dirname, '/build'),
//     },
//     mode: dev ? 'development' : 'production',
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         HTMLWebpackPluginConfig,
//         new MiniCssExtractPlugin({
//             filename: dev ? '[name].css' : '[name].[hash].css',
//             chunkFilename: dev ? '[id].css' : '[id].[hash].css',
//         })
//     ],

// };



















// {
//     test: /\.scss$/,
//     loader: 'style-loader!css-loader!sass-loader',
// },

// plugins: dev
    //     ? [
    //         HTMLWebpackPluginConfig,
    //         new webpack.HotModuleReplacementPlugin(),
    //         new MiniCssExtractPlugin({
    //             filename: '[name].css',
    //             chunkFilename: '[id].css',
    //         })
    //     ]
    //     : [
    //         HTMLWebpackPluginConfig,
    //         DefinePluginConfig,
    //         new MiniCssExtractPlugin({
    //             filename: '[name].[hash].css',
    //             chunkFilename: '[id].[hash].css',
    //         })
    //     ],





// const common = merge([
//     {
//         entry: {...},
//         output: {...},
//         plugins: [...],
//     },
//     pug()
// ]);

// module.exports = function(env) {
//     if (env === 'production') {
//         return common;
//     }
//     if (env === 'development') {
//         return merge([
//             common,
//             devserver()
//         ]);
//     }
// };