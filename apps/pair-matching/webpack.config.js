const path = require('path');
const isDEV = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: isDEV ? "development" : "production",
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3004/',
  },
  devtool: isDEV ? 'inline-source-map' : false,
  performance: { hints: false },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json", ".css", ".scss", ".jpg", "jpeg", "png", "svg",],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-react']
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3004
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: 'pairMatchingApp',
      filename: 'remoteEntry.js',
      exposes: {
        './PairMatching': './src/components/PairMatching',
      },
      remotes: {
        "zarkit": "zarkit@http://localhost:3002/remoteEntry.js",
      },
    }),
  ],
};
