module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {},
    'cssnano': env === 'production' ? {} : false,
    'postcss-preset-env': {
      stage: 0
    }
  }
})
