export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e27bb9044db5b3ec129e2ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-cewfxmny',
                  apiId: 'd9cc6f48-eb7c-4a71-bd59-ae75b530e9b3'
                },
                {
                  buildHookId: '5e27bb90c9700e4078749c34',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6oh5wcpn',
                  apiId: 'bd867593-8d0c-49b8-aedb-b0685f9b0859'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koderman/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6oh5wcpn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
