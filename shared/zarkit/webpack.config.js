const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    // این همان نشانی هست که serve هم داخل فایل package.json عینش رو دریافت کرده
    // خلاصه اینکه روی پورت ۳۰۰۲ من میام بالا
    // و داخل package.json رو هم بری نگاه کنی این پورت به serve داده شده است که روش گوش کنه
    publicPath: "http://localhost:3002/",
    clean: true,
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
          "style-loader",
          "css-loader",
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3002
  },

  plugins: [
    new ModuleFederationPlugin({
      // من اسمم zarkit هست و بقیه اگر خواستن از کامپوننت های من استفاده کنند
      // میتونن به این اسم و پورتی که serve میشم دسترسی داشته باشن
      name: "zarkit",
      filename: "remoteEntry.js",
      // هرکی از بیرون از remote من استفاده کرد
      // (یعنی توی وب‌پک خودش تعریف کرد remote من رو)
      // و گفت که من از zarkit کامپوننت Button رو میخوام برو توی این مسیر:
      // ./components/Button/index.js
      // و دکمه Button رو بهش بده
      exposes: {
        // همچنین بجای اینکه همه ریکت رو نصب کنن بیان از من بگیرن
        "./react": "react",
        // و همینطور من react-dom رو هم expose میکنم بیرون و بقیه میتونن اگر دوست داشتن از این استفاده کنن
        "./react-dom": "react-dom",
        // این یک دکمه به بیرون اشتراک گذاری شده است که در اختیار عموم علاقمندان قرار میگیرد
        "./button": "./components/Button",
        "./select": "./components/Select",
        "./textfield": "./components/TextField",
      },
    }),
  ],
};
