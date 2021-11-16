import { defineUserConfig } from 'vuepress'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { StarThemeOptions } from '@starzkg/vuepress-theme-star'
const isProd = process.env.NODE_ENV === 'production'
export default defineUserConfig<StarThemeOptions, ViteBundlerOptions>({
  lang: 'zh-CN',
  title: 'Starzkg',
  description: '你已经是一个成熟的程序猿了，要学会自己DEBUG了。',
  theme: '@starzkg/star',
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
  themeConfig: {
    logo: '/logo.png',
    // theme-level locales config
    locales: {
      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        // navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: {},

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/en/': {
        // navbar
        // navbar: navbar.en,
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        selectLanguageAriaLabel: 'Language',

        // sidebar
        // sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
  },
  bundler:
  // specify bundler via environment variable
      process.env.DOCS_BUNDLER ??
      // use vite in dev, use webpack in prod
      (isProd ? '@vuepress/webpack' : '@vuepress/vite'),
  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
        locales: {
          '/zh/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        // we have multiple deployments, which would use different id
        id: process.env.GA_ID,
      },
    ],
    [
      '@starzkg/baidu-analytics',
      {
        id: process.env.BA_ID,
      },
    ],
    // only enable shiki plugin in production mode
    [
      '@vuepress/plugin-shiki',
      isProd
          ? {
            theme: 'dark-plus',
          }
          : false,
    ],
  ],
})