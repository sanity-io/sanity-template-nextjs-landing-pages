export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  liveEdit: false,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'This title populates meta-tags on the webpage'
    },
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
    },
    // {
    //   title: 'Open graph',
    //   name: 'openGraph',
    //   type: 'openGraph',
    //   fieldset: 'metadata'
    // },
    {
      name: 'description',
      type: 'text',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      fieldset: 'metadata'
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'metadata'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      variations: 'experiment.variations'
    },
    prepare({title, subtitle, variations}) {
      return {
        title,
        subtitle: variations && variations.length ? `/${subtitle} (${variations.length} experiments)` : `/${subtitle}`
      }
    }
  }
}
