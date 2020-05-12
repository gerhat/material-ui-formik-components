const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      '@material-ui/core': path.resolve('./node_modules/@material-ui/core'),
      '@material-ui/lab': path.resolve('./node_modules/@material-ui/lab'),
      '@material-ui/styles': path.resolve('./node_modules/@material-ui/styles'),
      '@material-ui/pickers': path.resolve(
        './node_modules/@material-ui/pickers'
      ),
      'prop-types': path.resolve('./node_modules/prop-types'),
      formik: path.resolve('./node_modules/formik'),
      'material-ui-chip-input': path.resolve(
        './node_modules/material-ui-chip-input'
      ),
    },
    extensions: ['.jsx', '.js', '.json'],
  },
}
