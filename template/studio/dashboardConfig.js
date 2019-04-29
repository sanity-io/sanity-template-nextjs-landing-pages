export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'sanity-tutorials'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Netlify',
              sites: [
                {
                  buildHookId: '<#<deployments.studio.provider.buildHookId>#>',
                  name: 'Sanity Studio',
                  siteId: '<#<deployments.studio.provider.buildHookId>#>'
                },
                {
                  buildHookId: '<#<deployments.web.provider.buildHookId>#>',
                  name: 'Website',
                  siteId: '<#<deployments.web.provider.buildHookId>#>'
                }
              ]
            }
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']}
    }
  ]
}
