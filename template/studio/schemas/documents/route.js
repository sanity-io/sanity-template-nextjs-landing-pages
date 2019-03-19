export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  liveEdit: false,
  fields: [
    {
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page'
        }
      ]
    }
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title'
    },
    prepare({slug, pageTitle}) {
      return {
        title: `/${slug}`,
        subtitle: `Page: ${pageTitle}`
      }
    }
  }
}
