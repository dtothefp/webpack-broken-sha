import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const output = {
  path: __dirname + `/dist/`,
  filename: `[name]-[chunkhash].js`,
};

export default {
  entry: {
    main: `./main`
  },

  output,

  plugins: [
    new ExtractTextPlugin(`[name]-[chunkhash].css`),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),
    new webpack.LoaderOptionsPlugin({
      sourceMap: false,
      minimize: true,
      discardComments: {
        removeAll: true,
      },
      options: {
        context: ``,
        output,
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
        options: {
          babelrc: false,
          presets: [
            [`es2015`, {modules: false}],
            `react`
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: `style-loader?singleton`,
          loader: [
            `css-loader?modules&localIdentName=[hash:base64:5]&-autoprefixer`,
          ],
        }),
      },
    ],
  },
};
