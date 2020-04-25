export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-events-studio',
                  apiId: '28fa7327-360b-4f5c-b9f5-7f767b09e400'
                },
                {
                  buildHookId: '5ea45a6d3ea009db894ef7e0',
                  title: 'Events Website',
                  name: 'sanity-events',
                  apiId: '0cf62705-2388-4876-bc18-5ecbd4443cb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lauggh/sanity-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
