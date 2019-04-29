export default {
  type: 'object',
  name: 'mailchimp',
  title: 'Mailchimp newsletter signup',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading'
    },
    {
      name: 'actionUrl',
      type: 'url',
      title: 'URL to Mailchimp signup',
      description: 'Add the URL for the Mailchimp signup form here'
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Mailchimp newsletter signup plug',
      };
    },
  },
};
