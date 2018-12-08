'use strict';

const path = require("path");
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
        "./src/index.js",
        "./src/styles/style.scss"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./public/dist")
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: "babel-loader",
                options: {
                    presets: ["react", "stage-0", "es2015"],
                    plugins: ["transform-class-properties", "transform-decorators-legacy"]
                }
            },
            {
                test: /\.(png|jpeg|ttf|...)$/,
                use: [{ loader: "url-loader", options: { limit: 8192 } }]
            }
        ]
    },
    devServer: {
        contentBase: "./public/",
        watchContentBase: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        }
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new webpack.DefinePlugin({
            '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })',
            NODE_ENV: JSON.stringify(NODE_ENV),
            'process.env': {

            }
        }),
    ]
};