const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const package = require('./package.json');

let env = process.env.WEBPACK_ENV;

let plugins = [];
let outputFilename = package.name + '.js'

if (env === 'build') {
    plugins = [new UglifyJSPlugin({ sourceMap: true })];
    outputFilename = package.name + '.min.js';
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputFilename,
        library: package.name,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /|.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: plugins
};
