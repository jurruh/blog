module.exports = {
  title: 'Jurre\'s Blog',
  tagline: 'DevOps',
  url: 'https://blog.jurrevriesen.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jurruh', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Blog' ,
      logo: {
        alt: 'Jurre Vriesen',
        src: 'https://jurrevriesen.nl/img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
       
      ],
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
