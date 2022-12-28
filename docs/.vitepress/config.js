export default {
  title: 'Documentation',
  description: 'Documentation for Stonebound Entertainment Products.',
  
  themeConfig: {
    siteTitle: 'Documentation',
	nav: [
      { text: 'Documentation', link: '/documentation' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Release Notes', link: '/releases' }
    ],
	editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
	
	sidebar: [
      {
        text: 'Element Animator',
        items: [
          { text: 'Introduction', link: '/elementanimator/introduction' },
          { text: 'Getting Started', link: '/elementanimator/getting-started' },
          { text: 'Tutorials', link: '/elementanimator/tutorials' },
		  { text: 'Samples', link: '/elementanimator/samples' },
		  { text: 'Release Notes', link: '/elementanimator/release-notes' },
        ]
      }
    ]
  }
}