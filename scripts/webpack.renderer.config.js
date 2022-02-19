const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = (env) => {
  let config = {
    experiments: base.experiments,
    node: {
      ...base.node
    },
    mode: env,
    target: 'web',
    entry: {
      app: './src/renderer/index.ts'
    },
    output: {
      filename: './js/[name].v.js',
      chunkFilename: './js/[id].v.js',
      path: resolve('dist')
    },
    resolve: base.resolve,
    module: {
      rules: [
        ...base.module.rules,
        {
          test: /\.(sa|sc|c)ss$/i,
          use: ['css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './resources/build/index.html'
      })
    ],
    optimization: {
      minimize: env === 'production'
    }
  };

  if (env === 'production') config.devtool = base.devtool;

  return config;
};
