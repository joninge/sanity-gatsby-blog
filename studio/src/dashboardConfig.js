export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e67b365d04eda73a1ddaa27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xqadqgsr',
                  apiId: '9d900673-d6a0-4e7a-a2b2-60cd3d5a404e'
                },
                {
                  buildHookId: '5e67b365781a15975e8277db',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hwvr2syo',
                  apiId: '71d86ab2-57b5-4ac0-9303-475885fee195'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joninge/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hwvr2syo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
