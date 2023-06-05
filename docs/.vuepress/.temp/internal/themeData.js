export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Resources\",\"link\":\"../resources.md\"},{\"text\":\"Starter Guide\",\"children\":[\"../starterguide/README.md\",\"../starterguide/mechanics.md\",\"../starterguide/misc.md\"]},{\"text\":\"Encounters\",\"children\":[\"../encounter/deepdungeon.md\"]},{\"text\":\"Jobs\",\"children\":[\"../jobs/bluemage.md\",\"../jobs/fishing.md\"]},{\"text\":\"Relics\",\"children\":[\"../relic/README.md\",\"../relic/zodiac.md\",\"../relic/anima.md\",{\"text\":\"Eureka\",\"link\":\"../relic/eureka.md\"},{\"text\":\"Resistance\",\"link\":\"../relic/resistance.md\",\"children\":[\"\"]},\"../relic/manderville.md\",\"../relic/skysteel.md\",\"../relic/crystalline.md\"]}],\"sidebar\":{\"/\":[{\"text\":\"Resources\",\"children\":[\"resources.md\"]}],\"/encounter/\":[{\"text\":\"Encounter\",\"children\":[\"/encounter/README.md\",\"/encounter/deepdungeon.md\"]}],\"/starterguide/\":[{\"text\":\"Starter Guide\",\"children\":[\"/starterguide/README.md\",\"/starterguide/mechanics.md\",\"/starterguide/misc.md\"]}],\"/jobs/\":[{\"text\":\"Jobs\",\"children\":[\"/jobs/bluemage.md\",\"/jobs/fishing.md\"]}],\"/relic/\":[{\"text\":\"Relics\",\"children\":[\"/relic/README.md\",\"/relic/zodiac.md\",\"/relic/anima.md\",{\"text\":\"Eureka\",\"collapsible\":true,\"children\":[\"/relic/eureka.md\"]},{\"text\":\"Resistance\",\"collapsible\":true,\"children\":[\"/relic/resistance.md\"]},\"/relic/manderville.md\",\"/relic/skysteel.md\",\"/relic/crystalline.md\"]}]},\"editLink\":false,\"contributors\":false,\"repo\":\"tetraja/xiv\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
