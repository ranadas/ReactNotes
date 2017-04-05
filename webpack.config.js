const path = require('path');

module.exports = {
    entry: './source/main.js',
    output: {
        path: path.resolve('./source'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './source',
        port: 8100
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
