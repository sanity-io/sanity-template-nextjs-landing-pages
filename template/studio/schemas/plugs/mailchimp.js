export default {
  type: 'object',
  name: 'mailchimp',
  title: 'Mailchimp newsletter signup',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'subtitle',
      type: 'string'
    },
    {
      name: 'actionUrl',
      type: 'string'
    }
  ]
}
