const path = require("path");

module.exports = {
  // entry: エントリーポイントの指定
  entry: './src/js/app.js',
  // output: ファイルの出力先の設定
  // pathには必ず絶対パスを指定する。また、OSの違いによるエラーを防ぐため、必ずpathモジュールを利用する
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
}