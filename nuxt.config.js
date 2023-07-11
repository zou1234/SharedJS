export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SharedJS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    { src: '@/plugins/vue-mavon-editor', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit'
  ],

  // markdownit: {
  //   runtime: true,
  //   preset: 'default',n
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     // 'markdown-it-div',
  //     //'markdown-it-attrs'
  //   ]
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    components: true,
    build: {
      transpile: ['vue-markdown']
    }
  }
}
