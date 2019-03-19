const withCSS = require('@zeit/next-css')
const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'
const query = `
{
  "routes": *[_type == "route"] { ..., page->{_id, title}}
}
`

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? "[hash:base64:5]" : "[name]__[local]___[hash:base64:5]",
  },
  exportPathMap: function () {
    return client.fetch(query).then(res => {
      const routes = {
        // Index page from gobal-config
        '/': {
          page: '/LandingPage',
          query: {
            slug: '/'
          }
        },
        '/custom-page': {page: '/CustomPage'},
        // Routes imported from sanity
        ...res.routes.filter(route => route.slug && route.slug.current).reduce((obj, route) => {
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
