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
    '/zh/': {
      lang: 'en-US',
      title: 'Starzkg',
      description: '你已经是一个成熟的程序猿了，要学会自己DEBUG了',
    },
  },
  themeConfig: {
    logo: '/logo.png',
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
        id: process.env.DOCS_GA_ID,
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