export default {
  type: 'object',
  name: 'textPlug',
  title: 'Text',
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
      type: 'blockContent'
    }
  ]
}
