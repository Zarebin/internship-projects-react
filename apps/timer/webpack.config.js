const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const deps = require('./package.json').dependencies;
const path = require("path");

module.exports = {
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3001/',
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3001
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'timerApp',
      filename: 'remoteEntry.js',
      // هر کس خواست timer رو استفاده کنه میتونه به این صورت من رو import کنه:
      // import X from 'timerApp/RemoteApp'
      //
      // و اینکه داخل webpack خودش باید این رو بنویسه:
      /*
        remotes: {
          "timerApp": "timerApp@http://localhost:3001/remoteEntry.js",
        }

        توضیح سطر بالا
        "timerApp"[1]: "timerApp[2]@http://localhost:3001[3]/remoteEntry.js[4]",
        [1], [2] اسم اپ هست
        [3] پورتی که اپ میاد بالا
        [4] همون filename هست که بالا داریمش

      */
      exposes: {
        './RemoteApp': './src/RemoteApp',
      },
      // shared: {
      //   ...deps,
      //   react: {
      //     singleton: true,
      //   },
      //   'react-dom': {
      //     singleton: true,
      //   },
      // },
      remotes: {
        "zarkit": "zarkit@http://localhost:3002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
};
