import React from 'react'

import * as plugs from '../plugs'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  liveEdit: false,
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
