export const siteData = JSON.parse("{\"base\":\"/xiv/\",\"lang\":\"en-US\",\"title\":\"FFXIV Info\",\"description\":\"Dump of guides and info for ffxiv\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/14.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
