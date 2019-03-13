export default {
  type: 'document',
  name: 'site-config',
  title: 'Site config',
  fields: [
    {
      title: 'Site title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Brand logo',
      name: 'logo',
      type: 'image'
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}]
        },
        // {
        //   title: 'Collection',
        //   type: 'object',
        //   fields: [
        //     {
        //       name: 'title',
        //       type: 'string'
        //     },
        //     {
        //       name: 'items',
        //       type: 'array',
        //       of: [
        //         {
        //           type: 'reference',
        //           to: [{type: 'route'}]
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    }
  ]
}
