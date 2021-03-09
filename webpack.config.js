const path = require('path')
const webpack = require('webpack');

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
    plugins: [new webpack.DefinePlugin({
       NODE_ENV: JSON.stringify(process.env.NODE_ENV),
       FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
       FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
       FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
       FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
       FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
       FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
       FIREBASE_APP_ID: JSON.stringify(process.env.FIREBASE_APP_ID),
       FIREBASE_MEASUREMENT_ID: JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
    })],
    devtool: prodMode ? false : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}
