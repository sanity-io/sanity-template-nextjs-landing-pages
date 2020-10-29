
const env = process.env.NODE_ENV

module.exports = ({
  plugins: {
    'postcss-import': {},
    cssnano: env === 'production' ? {} : false,
    'postcss-preset-env': {
      stage: 0,
      features: {
        'color-mod-function': {unresolved: 'warn'},
        'nesting-rules': true
      }
    }
  }
})
