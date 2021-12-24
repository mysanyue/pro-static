## React 组件支持热更新

> 详细参考 [github 地址](https://github.com/mysanyue/pro-static/tree/main/webpack-react)

- package.json

```json
{
  "name": "webpack-react-hot",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  },
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.14.8",
    "@babel/core": "^7.15.0",
    "@babel/plugin-transform-arrow-functions": "^7.14.5",
    "@babel/plugin-transform-block-scoping": "^7.14.5",
    "@babel/preset-env": "^7.15.0",
    "@babel/preset-react": "^7.14.5",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
    "autoprefixer": "^10.3.1",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "copy-webpack-plugin": "^9.0.1",
    "css-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.2",
    "less": "^4.1.1",
    "less-loader": "^10.0.1",
    "postcss": "^8.3.6",
    "postcss-cli": "^8.3.1",
    "postcss-loader": "^6.1.1",
    "postcss-preset-env": "^6.7.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-refresh": "^0.10.0",
    "style-loader": "^3.2.1",
    "webpack": "^5.47.1",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "core-js": "^3.16.0",
    "express": "^4.17.1",
    "regenerator-runtime": "^0.13.9",
    "webpack-dev-middleware": "^5.0.0"
  }
}
```

- babel.config.js

```js
module.exports = {
  presets: [['@babel/preset-env'], ['@babel/preset-react']],
  plugins: [['react-refresh/babel']],
}
```

- webpack.config.js

```js
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:4][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3][ext]',
        },
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'copyWebpackPlugin',
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
```
