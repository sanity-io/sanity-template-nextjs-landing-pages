const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'
const query = `
{
  "routes": *[_type == "route"] {
    ...,
    disallowRobot,
    includeInSitemap,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}
`
const reduceRoutes = (obj, route) => {
  const {page = {}, slug = {}} = route
  const {_createdAt, _updatedAt} = page
  const {includeInSitemap, disallowRobot} = route
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  obj[path] = {
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

module.exports = {
  exportPathMap: function () {
    return client.fetch(query).then(res => {
      const {routes = []} = res
      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({slug}) => slug.current).reduce(reduceRoutes, {}),
        '/custom-page': {page: '/CustomPage'}
      }
      return nextRoutes
    })
  }
}