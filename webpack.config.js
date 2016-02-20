
var path = require('path'); // require path for use path function *root helper function is downstair
// if have some webpack --display-error-details
module.exports = {
  entry: {
      polyfill: "./src/polyfill",
      app: "./src/app/main"
      // devserver: 'webpack/hot/dev-server'
  },
  output: {
    path:  path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.es6'] // default extensions is JS
  },
  module: {
    // if you have something to do before loader like linter use on preload
    /* preLoaders: [
        {
            test: /\.js$/,
            exclude: 'node_modules',
            loader: 'jshint-loader'
        }
     ]
    */
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015'],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
       },
      {
        test: /\.scss$/,
        loader: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  }
  // devServer: {
  //   // contentBase: 'dist/',
  //   historyApiFallback: true,
  //   watchOptions: { aggregateTimeout: 300, poll: 1000 }
  // }
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
