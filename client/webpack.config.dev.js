const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: {app: "./src/main.js"},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			vue$: "vue/dist/vue.esm.js",
			"@": path.resolve(__dirname, "src")
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
					options: {presets: ["env", "stage-2"]}
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
							data: '@import "src/scss/variables/index.scss"; @import "src/scss/mixins/index.scss";'
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
			template: "public/index.html",
			inject: true
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, "src/assets"),
				to: "assets",
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
