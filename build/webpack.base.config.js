const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
   mode: isProd ? 'production' : 'development',
   devtool: isProd
      ? false
      : '#cheap-module-source-map',
   output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: '[name].[chunkhash].js'
   },
   resolve: {
      extensions: ['.js', '.vue', '.scss'],
   },
   module: {
      rules: [
         {
            test: /\.vue$/,
            loader: 'vue-loader',
            // options: {
            //    loaders:{
            //       less: [
            //          'vue-style-loader',
            //          'css-loader',
            //          'less-loader'
            //       ]
            //    }
            // }
         },
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url-loader',
            options: {
               limit: 10000,
               name: '[name].[ext]?[hash]'
            }
         },
         {
            test: /\.less?$/,
            use: [
               'vue-style-loader',
               'css-loader',
               'less-loader'
            ]
         },
      ]
   },
   performance: {
      maxEntrypointSize: 300000,
      hints: isProd ? 'warning' : false
   },
   plugins: isProd
      ? [
         new VueLoaderPlugin(),
         new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
         }),
         new webpack.optimize.ModuleConcatenationPlugin(),
         new ExtractTextPlugin({
            filename: 'common.[chunkhash].css'
         })
      ]
      : [
         new VueLoaderPlugin(),
         new FriendlyErrorsPlugin()
      ]
}
