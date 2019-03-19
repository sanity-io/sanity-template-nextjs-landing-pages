import bcp47 from 'bcp47'
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
      title: 'Site language',
      description: 'Shuld be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: Rule => Rule.custom(lang => {
        return bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
      })
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
