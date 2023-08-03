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
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
  ],

  axios: {
    //设置统一的基础url，线上环境关闭代理时使用它。
    baseURL:"http://192.168.137.1:9000/shared/",
    // baseURL:"http://10.201.8.73:8083/syzl1/",
    // proxy: true, // 表示开启代理
    // prefix: '/api', // 表示给请求url加个前缀 /api
    // credentials: true // 表示跨域请求时是否需要使用凭证
  },

  proxy: {
    '/api': {
      target: 'http://192.168.137.1:9000/shared/', // 目标接口域名
      // target: 'http://10.201.8.73:8083/syzl1/', // 目标接口域名
      // target: 'http://10.201.6.12:8081/syzl/', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      },
    }
  },

  build: {
    components: true,
    build: {
      transpile: ['vue-markdown']
    }
  },

  server: {
    host: '0.0.0.0',
    port: 9000
  },

  // 接口
  serverMiddleware: [
    { path: '/shared/shared-action-sheet', handler: '~/api/shared-action-sheet.js' },
    { path: '/shared/shared-bar-line', handler: '~/api/shared-bar-line.js' },
    { path: '/shared/shared-multi-pie', handler: '~/api/shared-multi-pie.js' },
    { path: '/shared/shared-schedule-bar', handler: '~/api/shared-schedule-bar.js' },
    { path: '/shared/shared-table-fix', handler: '~/api/shared-table-fix.js' },
  ]
}
