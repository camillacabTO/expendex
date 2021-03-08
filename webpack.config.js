const path = require('path')

module.exports = env => {
  let prodMode = env.production
  console.log(prodMode, env)
  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [],
    devtool: prodMode ? false : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}
