const withCSS = require('@zeit/next-css')
const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'
const query = `*[_type == "route"] { ..., page->{_id}}`

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? "[hash:base64:5]" : "[name]__[local]___[hash:base64:5]",
  },
  exportPathMap: function () {
    return client.fetch(query).then(res => {
      const routes = {
        // Index page
        '/': {page: '/'},
        // Example of custom page
        '/custom-page': {page: '/CustomPage'},
        // Routes imported from sanity
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
      return routes
    })
  }
})
