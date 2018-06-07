import { join } from 'path'
const include = join(__dirname, 'src')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        include

      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
