

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
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