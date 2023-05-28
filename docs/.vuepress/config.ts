import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';

export default defineUserConfig({
  // base directory
  base: '/xiv/',
  head: [['link', { rel: 'icon', href: '/images/14.png' }]],
  lang: 'en-US',
  title: 'FFXIV Info',
  description: 'Dump of guides and info for ffxiv',

  //theme
  theme: defaultTheme({
    navbar: [
      {
        text: 'Guides',
        link: '/guides/'
      }
    ],
    sidebar: 'auto',
    editLink: false,
    contributors: false,
    repo: 'tetraja/xiv'
  }),

  //plugins
  plugins: [removeHtmlExtensionPlugin()],
});
