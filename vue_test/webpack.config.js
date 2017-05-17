var webpack = require('webpack');

module.exports = [
    {
        entry: {
            // "test1/index"とキーを指定すると、出力先が/dist/javascript/test1/index.bundle.jsとなる。
            "test1/index": './src/javascript/test1/entry.js',
            "test2/index": './src/javascript/test2/entry.js',
            "test3/index": './src/javascript/test3/entry.js',
            "test4/index": './src/javascript/test4/entry.js',
            "test5/index": './src/javascript/test5/entry.js',
            "test6/index": './src/javascript/test6/entry.js',
            "test7/index": './src/javascript/test7/entry.js',
            "test8/index": './src/javascript/test8/entry.js'
        },
        output: {
            path: __dirname + '/dist/javascripts/',
            filename: "[name].bundle.js",
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /(node_modules|dist)/,
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true
                    }
                },
                {
                    test: /\.vue$/, loader: 'vue-loader'
                }
            ]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        }
    }
];
