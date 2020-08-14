export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      options: {
        localization: true
      }
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      options: {
        localization: true
      }
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
      options: {
        localization: true
      }
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media,
      };
    },
  },
};
