import { defineUserConfig } from 'vuepress'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { StarThemeOptions } from '@starzkg/vuepress-theme-star'
const isProd = process.env.NODE_ENV === 'production'
export default defineUserConfig<StarThemeOptions, ViteBundlerOptions>({
  lang: 'zh-CN',
  title: 'Starzkg',
  description: 'Just playing around',
  theme: '@starzkg/star',
  themeConfig: {
    logo: '/logo.png',
  },
  bundler:
  // specify bundler via environment variable
      process.env.DOCS_BUNDLER ??
      // use vite in dev, use webpack in prod
      (isProd ? '@vuepress/webpack' : '@vuepress/vite'),
})