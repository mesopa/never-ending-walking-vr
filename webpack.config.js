

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })
  ]
}