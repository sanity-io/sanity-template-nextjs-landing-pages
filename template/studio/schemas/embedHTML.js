import React from 'react'

export default {
  name: 'embedHTML',
  title: 'Embed HTML',
  type: 'object',
  fields: [{
    name: 'html',
    title: 'HTML',
    type: 'text',
    description: 'You usually want to avoid storing freeform HTML, but for embed codes it can be useful.',
    options: {
      language: 'html',
    },
  }],
  preview: {
    select: {
      html: 'html'
    },
    component: ({
      value
    }) => ( <div dangerouslySetInnerHTML={{__html: value.html}} />)
  }
}
