const client = require('./client')
const query = `*[_type == "route"] { ..., page->{_id}}`
const withCSS = require('@zeit/next-css')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? "[hash:base64:5]" : "[name]__[local]___[hash:base64:5]",
  },
  exportPathMap: function () {
    return client.fetch(query).then(res => {
      const routes = {
        '/': {page: '/'},
        '/custom-page': {page: '/CustomPage'},
        ...res.filter(route => route.slug && route.slug.current).reduce((obj, route) => {
          obj[`/${route['slug']['current']}`] = {
            query: {
              slug: route.slug.current
            },
            page: '/LandingPage'
          }
          return obj
        }, {})
      }
      console.log('routes', routes)
      return routes
    })
  }
})
