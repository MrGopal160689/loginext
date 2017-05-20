var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'plotmap.js',
        path: path.resolve(__dirname, './dist/')
    },
    resolve: {
        alias: {
            App: path.resolve(__dirname, './app/')
        },
        extensions: [".js"]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
};
