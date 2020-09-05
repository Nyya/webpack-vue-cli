const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "production",

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.min.js"
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "public/index.html",

            filename: "index.html"
        }),

        new vueLoaderPlugin()
    ]
}
