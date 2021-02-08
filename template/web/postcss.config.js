module.exports = {
  plugins: {
    'precss': {
      stage: 0,
      features: {
        'color-mod-function': {unresolved: 'warn'},
        'nesting-rules': true
      },
    },
    'postcss-import': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false
  }
}
