import React from 'react'

export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
       name: 'tagline',
       type: 'simpleBlockContent'
    },
    {
      name: 'backgroundImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctas',
      type: 'array',
      of: [{
        name: 'cta',
        type: 'cta'
      }]
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'backgroundImage'
    },
    prepare({heading, media}) {
      return {
        title: heading,
        subtitle: 'Hero plug',
        media: media
      }
    }
  }
}
