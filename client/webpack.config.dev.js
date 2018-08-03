const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {app: "./src/main.js"},
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {presets: ["env"]}
        },
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {sourceMap: true}
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              data:
                '@import "src/assets/scss/variables/index.scss"; @import "src/assets/scss/mixins/index.scss";'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "url-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./static"),
        to: "static",
        ignore: [".*"]
      }
    ])
  ],
  devServer: {
    historyApiFallback: {rewrites: [{from: /.*/, to: "/index.html"}]},
    compress: true,
    open: true,
    overlay: {warnings: true, errors: true},
    watchOptions: {poll: 500}
  }
};
