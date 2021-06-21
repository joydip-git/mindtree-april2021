const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const configObject = {
    entry: resolve(__dirname, 'src', 'index.jsx'),
    output: {
        filename: 'firstreactapp.bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 4000,
        contentBase: resolve(__dirname, 'build')
    }
}
module.exports = configObject