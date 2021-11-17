module.exports = {
  title: 'Jurre Vriesen',
  tagline: 'DevOps',
  url: 'https://jurrevriesen.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jurruh', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jurre Vriesen' ,
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
        {
          title: "Connect",
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jurre-vriesen-72a520116/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jurruh',
            }
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Docusaurus blog!',
          path: './blog',
          routeBasePath: '/', // Set this value to '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
