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
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    {
      name: 'frontpage',
      type: 'reference',
      to: {type: 'page'}
    },
    {
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
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
