const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const fs = require('fs');

const files = ['login', 'signup'];
const entryObject = {};
files.forEach((filename) => {
  entryObject[filename] = `./src/${filename}.js`;
});

module.exports = (env) => {
  const currentPath = path.join(__dirname);

  const basePath = `${currentPath}/.env`;
  const envPath = `${basePath}.${env.ENVIRONMENT}`;

  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      // filename: '[name].[contentHash:5].bundle.js',
      filename: 'bundle.js',
      publicPath: '',
    },
    mode: 'development',
    plugins: [
      // ...files.map((filename) => (
      //   new HtmlWebpackPlugin({
      //     chunks: [`${filename}`],
      //     filename: `${filename}.html`,
      //     template: './public/index.html',
      //   })
      // )),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
      }),
      new CleanWebpackPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/i,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            'file-loader',
          ],
        },
      ],
    },

    resolve: {
      alias: {
        myScreens: path.resolve(__dirname, 'src/screens/'),
        myComponents: path.resolve(__dirname, 'src/components'),
        myStudentComponents: path.resolve(__dirname, 'src/components/studentComponents/'),
        myAssets: path.resolve(__dirname, 'src/assets'),
        myStudentAssets: path.resolve(__dirname, 'src/assets/studentAssets'),
        myActions: path.resolve(__dirname, 'src/actions'),
        myConstants: path.resolve(__dirname, 'src/constants'),
      },
      extensions: ['.js'],
    },

    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: 'http://localhost:3000/',
    },
    node: {
      fs: 'empty',
    },
  };
};