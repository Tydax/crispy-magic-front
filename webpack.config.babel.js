import path from 'path';

export default {
  entry: './src/client/App.jsx',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'client-bundle.js',
    publicPath: 'dist/',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
