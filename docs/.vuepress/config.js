import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
  // base directory
  base: '/xiv/',
  
  //head
  head: [['link', { rel: 'icon', href: '../images/14.png' }]],
  
  lang: 'en-US',
  title: 'FFXIV Info',
  description: 'Dump of guides and info for ffxiv',

  // default theme
  theme: defaultTheme({
    logo: '',
  }),
})
