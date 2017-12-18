// This webpack config is used to compile the JS for the CMS
const path = require('path')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "stylesCMS.css",
    // path: path.resolve(__dirname, '../static/admin/'),
    //disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './cms.js',
  output: {
    filename: 'cms.bundle.js',
    path: path.resolve(__dirname, '../static/admin/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
          },
        },
      },

      // https://github.com/webpack-contrib/less-loader
      {
            test: /\.less$/,
            use: extractLess.extract({
              use: [/*{
                  loader: "style-loader", // creates style nodes from JS strings
                  /*options: {
                    insertInto: 'iframe'
                  }*/
              /*},*/ {
                  loader: "css-loader?modules&importLoaders=1&localIdentName=[path]---[name]---[local]---[hash:base64:5]'" // translates CSS into CommonJS
                  //  loader: 'style-loader!css-loader?modules' // &importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }],

              // use style-loader in development
              fallback: "style-loader"
            })
        },
    ],
  },
  plugins: [
       extractLess
   ],
  resolve: {
    alias: {
      site: '../src/',
    },
  },
}
