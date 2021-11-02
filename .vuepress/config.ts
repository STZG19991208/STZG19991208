import { defineUserConfig } from 'vuepress'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { StarThemeOptions } from '@starzkg/vuepress-theme-star'

export default defineUserConfig<StarThemeOptions, ViteBundlerOptions>({
  lang: 'zh-CN',
  title: 'Starzkg',
  description: 'Just playing around',
  theme: '@starzkg/star',
  themeConfig: {
    logo: '/logo.png',
  },
})