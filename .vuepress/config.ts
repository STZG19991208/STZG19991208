import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: 'zh-CN',
  title: 'Starzkg',
  description: 'Just playing around',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})