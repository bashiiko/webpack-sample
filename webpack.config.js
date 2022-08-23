const path = require("path");

module.exports = {
  // mode: webpackのモードを指定（development, production, noneのいずれか）
  // 選択したモードによってwebpackの挙動が異なる
  // development → ソースマップの生成、再ビルド時間の短縮などの設定が有効になる（開発環境用）
  // production → ファイルの圧縮、モジュールの最適化などの設定が有効になる（本番用）
  mode: 'development',
  // entry: エントリーポイントの指定
  entry: './src/js/app.js',
  // output: ファイルの出力先の設定
  // pathには必ず絶対パスを指定する。また、OSの違いによるエラーを防ぐため、必ずpathモジュールを利用する
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // ローダーの処理対象ファイル
        include: path.resolve(__dirname, 'src/js'), // ローダーの処理対象となるディレクトリ,
        use: 'babel-loader', // 利用するローダー
      }
    ]
  }
}