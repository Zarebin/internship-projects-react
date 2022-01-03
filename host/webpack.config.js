const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "http://localhost:3000/",
    clean: true,
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".json",
      ".css",
      ".scss",
      ".jpg",
      "jpeg",
      "png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
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
    port: 3000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mainApp",
      // I want to use two remoteApps {zarkit, timerApp} hosted in these ports
      remotes: {
        "zarkit": "zarkit@http://localhost:3002/remoteEntry.js",
        "timerApp": "timerApp@http://localhost:3001/remoteEntry.js",
        "converterApp":"converterApp@http://localhost:3005/remoteEntry.js",
        "pairMatchingApp": "pairMatchingApp@http://localhost:3003/remoteEntry.js",
        
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
