export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Internal page (route)',
      name: 'route',
      type: 'reference',
      to: [{type: 'route'}],
      fieldset: 'link'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      fieldset: 'link'
    }
  ],
  preview: {
    select: {
      title: 'title',
      routeTitle: 'route.title',
      slug: 'route.slug.current',
      link: 'link'
    },
    prepare({title, routeTitle, slug, link}) {
      const subtitleExtra = slug ? `Slug:/${slug}/` : (link ? `External link: ${link}` : 'Not set')
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`
      }
    }
  }
}
