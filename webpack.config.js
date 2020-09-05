// const path = require('path');

// module.exports = {
//     // development, production 或 none，默认值为 production，来设置 webpack 内置环境
//     mode: 'none',

//     // 指示 webpack 应该使用哪个模块来作为开始
//     entry: './src/components/com.js',

//     // 在哪里输出它所创建的 bundle
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     }
// }

module.exports = env => {
    env = env || {};

    return {
        entry: "./src/main",

        module: {
            rules: [
                { test: /\.vue$/, use: 'vue-loader' },
                // 这里 webpack 使用 loader 是从右向左的
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            ]
        },

        resolve: {
            // 默认扩展名
            extensions: ['.js', '.json', '.vue'],
            // 别名
            alias: {
                vue: 'vue/dist/vue.esm'
            }
        },

        ...(env.production ? require('./config/webpack.production') : require('./config/webpack.development'))
    }
}
