export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
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
                type: 'string',
                validation: Rule => Rule.uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']})
              }
            ]
          },
          {
            title: 'Internal link to another document',
            name: 'internalLink',
            type: 'reference',
            to: [
              {type: 'article'},
              {type: 'chapter'},
              {type: 'remoteArticle'},
              {type: 'schemaType'}
            ],
            description: 'Locate a document you want to link to'
          }
        ]
      }
    },
    {
      title: 'Image',
      type: 'image',
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption'
        }
      },
      fields: [
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Alternative text for screenreaders. Falls back on caption if not set',
          options: {
            isHighlighted: true
          }
        }
      ]
    }
  ]
}
