module.exports = {
  plugins: {
    'postcss-import': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
    'postcss-preset-env': {
      stage: 0,
      features: {
        'color-mod-function': {unresolved: 'warn'},
        'nesting-rules': true
      }
    }
  }
}