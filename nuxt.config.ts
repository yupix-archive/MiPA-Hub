// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'app/',
    
    modules: ['@nuxtjs/i18n'],
    i18n: {
        locales: [{code: 'ja', iso: 'ja-JP', file: 'ja.json'}],
        defaultLocale: 'ja',
        langDir: 'locales/',
        strategy: 'prefix_except_default',
        vueI18n: {
            fallbackLocale: 'ja'
        },
        lazy: true
    },
    vite: {
        ssr: {
            //noExternal: ['naive-ui']
        }
    },
    devServer: {
        port: 4000,
        host: '0.0.0.0'
    }
})
