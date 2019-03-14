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
      name: 'illustration',
      type: 'image'
    },
    {
      name: 'backgroundImage',
      type: 'image'
    },
    // {
    //   name: 'ctas',
    //   type: 'array',
    //   of: [{
    //     name: 'cta',
    //     type: 'cta'
    //   }]
    // }
  ],
  preview: {
      select: {
        heading: 'heading',
        tagline: 'tagline',
        media: 'backgroundImage'
      },
      prepare({heading, tagline, media}) {
        console.log(tagline)
        return {
          title: `Hero: ${heading}`,
          media: media
        }
      }
    }
}
