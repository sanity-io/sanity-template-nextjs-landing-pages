import React from 'react'

import * as plugs from '../plugs'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
      title: 'Title'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        // {
        //   title: 'Plug composition',
        //   type: 'reference',
        //   to: {
        //     type: 'plugComposition'
        //   }
        // }
      ].concat(Object.values(plugs).map(plug => ({type: plug.name})))
    },
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
    {
      title: 'Open Graph Image',
      name: 'openGraphImage',
      type: 'image',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      content: 'content'
    },
    prepare({title, content}) {
      return {
        title: title,
        // subtitle: content ? `${content.filter(f => f._type === 'reference').length} Page compositions ${content.filter(f => f._type != 'reference').length} Plugs` : 'Empty'
      }
    }
  }
}
