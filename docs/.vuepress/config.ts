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
        link: '.../resources.md'
      },
      {
        text: 'Reference',
        link: '/reference.md'
      },
      {
        text: 'Starter Guide',
        children: ['../starterguide/README.md', '../starterguide/mechanics.md', '../starterguide/misc.md'],
      },
      {
        text: 'Encounters',
        children: ['../encounter/deepdungeon.md',],
      },
      {
        text: 'Jobs',
        children: ['../jobs/bluemage.md', '../jobs/fishing.md'],
      },
      {
        text: 'Relics',
        children: ['../relic/README.md', '../relic/zodiac.md', '../relic/anima.md',
          { 
            text: 'Eureka', 
            link: '/relic/sb/eureka.md',
          },
          {
            text: 'Resistance',
            children: ['/relic/shb/resistance.md','/relic/shb/bozja.md'],
          },
        './relic/manderville.md', './relic/tools/skysteel.md', './relic/tools/crystalline.md',
      ]},
    ],

    // sidebar tree
    sidebar: {
      '/': [
        {
          text: 'Resources',
          children: ['resources.md'],
        }
      ],
      '/encounter/': [
        {
          text: 'Encounter',
          children: [
            '/encounter/README.md',
            '/encounter/deepdungeon.md',
          ],
        }
      ],
      '/starterguide/': [
        {
          text: 'Starter Guide',
          children: [
            '/starterguide/README.md',
            '/starterguide/mechanics.md',
            '/starterguide/misc.md',
          ],
        }
      ],
      '/jobs/': [
        {
          text: 'Jobs',
          children: [
            '/jobs/bluemage.md',
            '/jobs/fishing.md',
          ],
        }
      ],
      '/relic/': [
        {
          text: 'Relics',
          children: [
            '/relic/README.md',
            '/relic/zodiac.md',
            '/relic/anima.md',
            {
              text: 'Eureka',
              collapsible: true,
              children: ['/relic/sb/eureka.md',]
            },
            {
              text: 'Resistance',
              collapsible: true,
              children: ['/relic/shb/resistance.md',]
            },
            '/relic/manderville.md',
            '/relic/tools/skysteel.md',
            '/relic/tools/crystalline.md',
          ],
        }
      ],
    },

    editLink: false,
    contributors: false,
    repo: 'tetraja/xiv',
   }),

  //plugins
  plugins: [removeHtmlExtensionPlugin()],
});
