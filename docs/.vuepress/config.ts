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

  theme: defaultTheme({
    // navigation bar
    navbar: [
      {
        text: 'Resources',
        link: '../resources.md'
      },
      {
        text: 'Starter Guide',
        link: '../starterguide/README.md',
        children: ['../starterguide/mechanics.md', '../starterguide/misc.md'],
      },
      {
        text: 'Encounters',
        link: '../encounter/README.md',
        children: ['../encounter/deepdungeon.md'],
      },
      {
        text: 'Jobs',
        link: '../jobs/README.md',
        children: ['../jobs/blu.md', '../jobs/fishing.md'],
      },
      {
        text: 'Relics',
        link: '../relic/README.md',
        children: ['../jobs/blu.md', '../jobs/fishing.md'],
      },
    ],

    // sidebar tree
    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          children: [
            '/guides/README.md',
            '/guides/bluemage.md',
            '/guides/randomstuff.md',
          ],
        },
      ],
    },
    
    editLink: false,
    contributors: false,
    repo: 'tetraja/xiv',
  }),

  //plugins
  plugins: [removeHtmlExtensionPlugin()],
});
