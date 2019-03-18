export default {
  type: 'object',
  name: 'site-config',
  title: 'Site config',
  fieldsets: [
    {name: 'footer', title: 'Footer'}
  ],
  fields: [
    {
      title: 'Site title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'frontpage',
      type: 'reference',
      to: {type: 'page'}
    },
    {
      title: 'Brand logo',
      name: 'logo',
      type: 'image'
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}]
        }
      ]
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}]
        }
      ]
    },
    {
      name: 'footerText',
      name: 'footerText',
      type: 'simpleBlockContent',
      fieldset: 'footer'
    }
  ]
}
