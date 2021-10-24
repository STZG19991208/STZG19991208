import type { ThemeObject } from '@vuepress/core'
import { createPage } from '@vuepress/core'
import { path } from '@vuepress/utils'

const starTheme: ThemeObject = {
  name: 'vuepress-theme-star',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  async onInitialized(app){    
    app.pages.push(
    await createPage(app, {
      path: '/',
      frontmatter: {
        layout: 'Layout',
      },
      content: `\
# 首页
你好，世界。
`,
      })
    )
  }
}

export default starTheme