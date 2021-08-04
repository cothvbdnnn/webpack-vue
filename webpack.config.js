const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'caches',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'ts-loader',
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' }},
          { loader: 'file-loader', options: { name: 'css/[name].[hash].css' }},
          { loader: 'sass-loader', options: { sourceMap: true }}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'file-loader', options: { name: 'img/[name].[ext]' }}
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}