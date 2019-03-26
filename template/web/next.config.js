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
const reduceRoutes = (obj, route) => {
  const { page = {}, slug = {} } = route
  const { includeInSitemap, disallowRobot, _createdAt, _updatedAt } = page
  obj[`/${route['slug']['current']}`] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: '/LandingPage'
  }
  return obj
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction
      ? '[hash:base64:5]'
      : '[name]__[local]___[hash:base64:5]'
  },
  exportPathMap: function() {
    return client.fetch(query).then(res => {
      const { frontpage = {}, routes = [] } = res
      const { includeInSitemap, disallowRobot, _updatedAt } = frontpage
      const nextRoutes = {
        // Index page from gobal-config
        '/': {
          page: '/LandingPage',
          includeInSitemap,
          disallowRobot,
          _updatedAt,
          query: {
            slug: '/'
          }
        },
        '/custom-page': { page: '/CustomPage' },
        // Routes imported from sanity
        ...routes
          .filter(({slug}) => slug.current)
          .reduce(reduceRoutes, {})
      }
      return nextRoutes
    })
  }
})
