import naive from 'naive-ui'

// https://www.reddit.com/r/vuejs/comments/ufgil9/nuxtjs_3_naiveui/
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(naive)
  })