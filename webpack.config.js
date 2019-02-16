const  path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry:  path.resolve(__dirname,'src/app.js'),
  devtool: 'inline-source-map',
  output:{
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
    ]
  },
  mode: 'development',
  target: 'node',
};
