module.exports = {
  enty: './index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist/'),
    filename: '[name].js'
  },
  resolve: {
    alias: { jquery: 'src/lib/jquery.js' }
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.html/,
      loader: 'html-loader?' + JSON.stringify({ minimize: false })
    }]
  }
};