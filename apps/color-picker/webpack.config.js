const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './src/index',
    mode: 'development',

    optimization: {
        minimize: false,
    },

    output: {
        publicPath: 'http://localhost:3007/',
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
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
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
        port: 3007
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'colorPickerApp',
            filename: 'remoteEntry.js',
            exposes: {
                './RemoteApp': './src/components/panel',
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
