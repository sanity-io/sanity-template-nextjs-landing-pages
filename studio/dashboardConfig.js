export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanity-io/sanity-template-nextjs-landing-pages',
            // @TODO revisit in v3 when this is as  simple as doing
            // value: `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`,
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: typeof document === 'undefined' ? '/' : location.origin,
            category: 'apps',
          },
        ],
      },
    },
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'},
    },
    {name: 'project-users', layout: {height: 'auto'}},
  ],
}
