const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  cache: false,
  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },
  output: {},
  resolve: {
    extensions: ['.jsx', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'converterApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteApp': './src/App',
      },
      remotes: {
        zarkit: 'zarkit@http://localhost:3002/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
