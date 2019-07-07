module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx|js|jsx)$/,
    loader: require.resolve('babel-loader'),
    exclude: /node_modules/,
    options: {
      presets: ['@babel/react', '@babel/typescript'],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
