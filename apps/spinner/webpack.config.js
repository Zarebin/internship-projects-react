const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const deps = require('./package.json').dependencies;
const path = require('path');
module.exports = {
    entry: './src/index.jsx',
    cache: false,
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    output: {
        publicPath: 'http://localhost:3008/',
    },
    resolve: {
        extensions: [
            ".jsx",
            ".js",
            ".css",
            ".scss",

        ],
    },
    module: {
        rules: [

            {
                test: /\.(svg)$/,
                loader: "url-loader",
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3008
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spinnerApp',
            filename: 'remoteEntry.js',
            exposes: {
                './RemoteApp': './src/App',
            },
            remotes: {
                "zarkit": "zarkit@http://localhost:3002/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
};