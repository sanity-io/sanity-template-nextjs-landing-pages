export default {
  title: 'Simple Block Content',
  name: 'simpleBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Italic', value: 'italic'},
          {title: 'Code', value: 'code'}
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          },
          {
            title: 'Internal link to another document',
            name: 'internalLink',
            type: 'reference',
            to: [
              {type: 'page'},
              {type: 'route'}
            ],
            description: 'Locate a document you want to link to'
          }
        ]
      }
    },
    {
      title: 'dangerous HTML',
      name: 'dangerousHtml',
      type: 'text',
      options: {
        language: 'html'
      }
    }
  ]
}
