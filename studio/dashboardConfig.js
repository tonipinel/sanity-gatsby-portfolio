export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '616d1da8117afe71050a3d56',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mdejrrum',
                  apiId: '75db291b-d7d0-48dd-98bd-cf09bba35f1e'
                },
                {
                  buildHookId: '616d1da861d550ca5fea21da',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-98cn66sb',
                  apiId: '8c0126e5-e670-4159-8fea-e0c17575c2f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tonipinel/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-98cn66sb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
