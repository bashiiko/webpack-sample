const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
// JSを圧縮するプラグイン
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
        new TerserPlugin({
            extractComments: false,
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        })
    ]
  }
})