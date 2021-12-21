const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3003/',
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".tsx",
      ".ts",
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
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                "css-loader",
                "postcss-loader",
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
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/
      // },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'calculatorApp',
      filename: 'remoteEntry.js',
      
      exposes: {
        './Calculator': './src/components/Calculator',
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
