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
    // {
    //   name: 'tagline',
    //   type: 'simpleBlockContent'
    // },
    {
      name: 'illustration',
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
        subtitle: 'heading'
      },
      prepare({subtitle}) {
        return {
          title: 'Hero',
          subtitle
        }
      }
    }
}
