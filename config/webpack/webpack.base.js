const path = require('path');
const Dotenv = require('dotenv-webpack');
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');
module.exports = {
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  output: {
    path: DIST_PATH,
    filename: '[name].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve('src'),

        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css?$/,
        exclude: [],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@src': SRC_PATH,
    },
  },
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
};
