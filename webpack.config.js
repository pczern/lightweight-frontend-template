var path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: ['@babel/react', '@babel/typescript'],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
}
