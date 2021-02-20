const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/main.js",
  devServer: {
    contentBase: "dist",
    open: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // モジュールを追加
  // 追加することでjavascript以外のファイルも理解できるように
  module: {
    rules: [
      {
        // 対象となるファイルを指定
        test: /\.js$/,
        // 対象外のフォルダを指定
        exclude: /node_modules/,
        // bundleファイルに読み込む前の処理を指定
        use: [
          {
            // 読み込むローダーを指定
            // ローダーとは外部からデータを読み込むもの
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          },
        ],
      },
    ],
  },
};
