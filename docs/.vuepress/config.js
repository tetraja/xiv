import { defineUserConfig } from "vuepress"

export default defineUserConfig({
  lang: "en-US",
  title: "FFXIV Info",
  description: "Dump of guides and info for ffxiv",
  base: "/xiv/",
  head: [["link", { rel: "icon", href: "../images/14.png" }]],
})