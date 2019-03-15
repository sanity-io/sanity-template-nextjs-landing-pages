export default {
  type: 'object',
  name: 'imagePlug',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'text',
      type: 'simpleBlockContent'
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image'
    },
    prepare({heading, media}) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image plug',
        media
      }
    }
  }
}
