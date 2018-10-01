const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "index.html",
  filename: "index.html",
  inject: true
});

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", path.join(__dirname, "../src/index.tsx")],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[local]"
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/build")
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: "localhost",
    port: "3000",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  }
};

// {
//     test: /\.scss$/,
//     loaders: [
//         'style-loader',
//         {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               sourceMap: true,
//               importLoaders: 1,
//               localIdentName: '[local]___[hash:base64:5]'
//             }
//           },
//         'sass-loader'
//     ],
// },

// "sass-loader"

// localIdentName: "[local]___[hash:base64:5]"
