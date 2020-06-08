const withCSS = require('@zeit/next-css')
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

  // Generate a page for each language
  Object.keys(slug).forEach(lang => {
    if (lang === '_type') return

    const path = slug[lang].current === '/' ? `/` : `/${slug[lang].current}`
    obj[path] = {
      query: {
        slug: slug[lang].current,
        lang: lang
      },
      includeInSitemap,
      disallowRobot,
      _createdAt,
      _updatedAt,
      page: '/LandingPage'
    }
  })
  return obj
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
  },
  exportPathMap: function () {
    return client.fetch(query).then(res => {
      const {routes = []} = res
      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({slug}) => slug).reduce(reduceRoutes, {}),
        '/custom-page': {page: '/CustomPage'}
      }
      return nextRoutes
    })
  }
})
