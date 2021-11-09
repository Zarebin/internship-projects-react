const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',

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
      // {
      //   test: /bootstrap\.js$/,
      //   loader: "bundle-loader",
      //   options: {
      //     lazy: true,
      //   },
      // },
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
                // MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
              ],
            },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'calendarApp',
      filename: 'remoteEntry.js',
  
      exposes: {
        './RemoteApp': './src/Calendar',
      },
      
      remotes: {
        // "zarkit": "zarkit@http://localhost:3002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
};
