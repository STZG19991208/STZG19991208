import { defineUserConfig } from 'vuepress'
import { starTheme } from '@starzkg/vuepress-theme-star'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { baiduAnalyticsPlugin } from '@starzkg/vuepress-plugin-baidu-analytics'
import { cnzzAnalyticsPlugin } from '@starzkg/vuepress-plugin-cnzz-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { path } from '@vuepress/utils'
import locales from './locales'
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  title: 'Starzkg',
  description: '你已经是一个成熟的程序猿了，要学会自己DEBUG了。',
  lang: 'zh-CN',
  dest: 'dest',
  public: 'public',
  cache: '.cache',
  temp: '.temp',
  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Starzkg',
      description: '你已经是一个成熟的程序猿了，要学会自己DEBUG了',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Starzkg',
      description: '你已经是一个成熟的程序猿了，要学会自己DEBUG了',
    },
  },
  theme: starTheme({
    logo: '/logo.png',
    // theme-level locales config
    locales: locales
  }),
  bundler:
  // specify bundler via environment variable
    process.env.DOCS_BUNDLER === 'webpack' || isProd
      ? webpackBundler()
      : viteBundler(),
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    googleAnalyticsPlugin({
      // we have multiple deployments, which would use different id
      id: process.env.GA_ID,
    }),
    baiduAnalyticsPlugin({
      id: process.env.BA_ID,
      spa: true
    }),
    cnzzAnalyticsPlugin({
      id: process.env.UA_ID,
      webId: "1280714941",
      spa: true
    })
    ,
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
})