const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyFilePlugin = require("copy-webpack-plugin")

// CSS
const css_config = {
    //エントリポイント
    entry: './src/app.js',
    //出力先
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            // sass, scss, css
            {
                //拡張子 .scss、.sass、css を対象
                test: /\.(scss|sass|css)$/i,
                // 使用するローダーの指定（後ろから順番に適用される）
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
            },
        ],
    },
    //プラグインの設定
    plugins: [
        new MiniCssExtractPlugin({
            // 抽出する CSS のファイル名
            filename: 'style.css',
        }),
        new CopyFilePlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, "./src"),
                    from: path.resolve(__dirname, "./src/*.html"),
                    to: path.resolve(__dirname, "./dist"),
                },
            ]
        })
    ],
    //source-map タイプのソースマップを出力
    devtool: 'source-map',
    // node_modules を監視（watch）対象から除外
    watchOptions: {
        ignored: /node_modules/  //正規表現で指定
    },
};

module.exports = [css_config];

// JavaScript
// const js_config = {
//     entry: {
//         top: './src/app.js',
//     },
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, './dist/js'),
//     },
//     devtool: 'source-map',
//     resolve: {
//         alias: {
//             vue$: 'vue/dist/vue.esm-bundler.js'
//         }
//     }
// };
//
// module.exports = [css_config, js_config];