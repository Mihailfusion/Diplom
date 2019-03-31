
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  watch: true,
  devtool: 'scurce-map',

  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets':[
              [
                "@babel/preset-env",
                {
                  "targets":{
                    // "browsers": ['last 2 versions', "ie >= 11"],
                    edge: "17",
                      firefox: "60",
                      chrome: "67",
                      safari: "11.1",
                      ie: "11"
                  }
                }
              ]
            ],
            plugins: ["es6-promise"]
          }
        }
      }
    ]
  }

//  module: {
//    rules: [{
//      test: /\.js$/,
//      exclude: /(node_modules|bower_components)/,
//      use: {
//        loader: 'babel-loader?optional[]=runtime',
//        options: {
//          presets: [
//            ["@babel/env", {
//              targets: {
//                edge: "17",
//                firefox: "60",
//                chrome: "67",
//                safari: "11.1",
//                ie: "11"
//              },
//              useBuiltIns: "usage"
//            }]
//          ]
//        }
//      }
//    }]
//  }
//  ,
//  plugins: [
//    new UglifyJsPlugin()
//  ]


};