const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",

    output: {
        filename: "bundle.js"
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "public/index.html",

            filename: "index.html"
        }),

        new vueLoaderPlugin()
    ]
}
