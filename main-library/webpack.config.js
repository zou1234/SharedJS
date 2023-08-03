const path = require('path');

module.exports = {
  entry: './core/index.js', // 入口文件

  // output: {
  //   filename: 'index.js', // 输出文件名
  //   path: path.resolve(__dirname, 'SharedJS'), // 输出文件路径
  //   library: {
  //     type: "module",
  //   },
  //   // module: true,
  //   // libraryTarget: 'umd',
  //   // libraryExport: "default"
  // },
  // experiments: {
  //   outputModule: true,
  // },

  output:{
    filename: 'index.js',
    library: 'SharedJS',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'SharedJS')
  },

  // mode: "none",
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }]
            ]
          }
        }
      },
      // {
      //   test: /\.ts$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/
      // }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  externals: function(context, request, callback) {
    if (/^lodash($|\/)/.test(request)) {
      return callback(null, 'lodash');
    }
    callback();
  }
};
