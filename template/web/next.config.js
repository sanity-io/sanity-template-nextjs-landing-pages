const withCSS = require('@zeit/next-css')
const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'
const query = `
{
  "frontpage": *[_id == "global-config"] {frontpage-> {...}}[0].frontpage,
  "routes": *[_type == "route"] {
    ...,
    page->{
      _id,
      title,
      disallowRobot,
      includeInSitemap,
      _createdAt,
      _updatedAt
  }}
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
          includeInSitemap: res.frontpage.includeInSitemap,
          disallowRobot: res.frontpage.disallowRobot,
          _updatedAt: res.frontpage._updatedAt,
          query: {
            slug: '/'
          }
        },
        '/custom-page': {page: '/CustomPage'},
        // Routes imported from sanity
        ...res.routes.filter(route => route.slug && route.slug.current).reduce((obj, route) => {
          const {includeInSitemap, disallowRobot, _createdAt, _updatedAt} = route.page
          obj[`/${route['slug']['current']}`] = {
            query: {
              slug: route.slug.current
            },
            includeInSitemap,
            disallowRobot,
            _createdAt,
            _updatedAt,
            page: '/LandingPage'
          }
          return obj
        }, {})
      }
      return routes
    })
  }
})
