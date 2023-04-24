const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'YarnTwiner',
            template: 'src/index.html',
            jsExtension: '.js',
            inject: 'body',
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLInlineCSSWebpackPlugin(),
        new HtmlInlineScriptPlugin({
            scriptMatchPattern: [/index.js/],
        }),
        new CssMinimizerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    }
};