export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      options: {
        localization: true
      }
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      options: {
        localization: true
      }
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
      options: {
        localization: true
      }
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      };
    },
  },
};
