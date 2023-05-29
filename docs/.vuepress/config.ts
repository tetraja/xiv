import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';

export default defineUserConfig({
  // general site stuff
  base: '/xiv/',
  head: [['link', { rel: 'icon', href: '/images/14.png' }]],
  lang: 'en-US',
  title: 'FFXIV Info',
  description: 'Dump of guides and info for ffxiv',

  //theme
  theme: defaultTheme({
    navbar: [
      {
        text: 'Resources',
        link: 'resources.md'
      },
      {
        text: 'Guides',
        link: '/guides/',
        children: ['']
      }
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          children: [
            '/guides/README.md',
            '/guides/bluemage.md',
          ],
        },
      ],
    },
    editLink: false,
    contributors: false,
    repo: 'tetraja/xiv'
  }),

  //plugins
  plugins: [removeHtmlExtensionPlugin()],
});
