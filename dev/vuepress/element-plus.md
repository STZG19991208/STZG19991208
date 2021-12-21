
# 集成Element PLus
## 安装element-plus
进入vuepress根目录，执行命令
```
npm install element-plus
```
## 修改 enhanceApp.js
接下来需要修改用于客户端应用增强的docs/.vuepress/enhanceApp.js文件

vuepress的目录结构如下：
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)   <-- 修改这个文件
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```
修改后文件如下：

```js
import * as Icons from '@element-plus/icons-vue'
import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default defineClientAppEnhance(({ app }) => {
  app.use(ElementPlus)
  // icon
  for (const icon in Icons) {
    // eslint-disable-next-line import/namespace
    app.component('ElIcon' + icon, Icons[icon])
  }
})
```
chainWebpack配置
参考：https://v2.vuepress.vuejs.org/reference/bundler/webpack.html#chainwebpack
```js
chainWebpack = (config, isServer, isBuild) => {
        config.resolve.extensions.add('.mjs')

        // https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
        config.module
          .rule('esm')
          .test(/\.m?jsx?$/)
          .resolve.set('fullySpecified', false)
          .end()
          .type('javascript/auto')
      }
```
vite配置
```js
  if (app.env.isDev && app.options.bundler.endsWith('vite')) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(
      app.options.bundlerConfig.viteOptions,
      {
        optimizeDeps: {
          include: ['lodash'],
        },
      }
    )
  }
```
## 使用
接下来就可以像往常一样食用element的组件了

```
<el-button type="success">按钮</el-button>
```
## NPM
## Install
```bash
npm i -D @starzkg/vuepress-plugin-element-plus
```

或

```bash
yarn add -D @starzkg/vuepress-plugin-element-plus
```

# 参考源码
- https://github.com/vuejs/vue-cli/blob/next/packages/%40vue/cli-service/lib/config/base.js#L16-L21
# Issue
- [[Bug Report] 1.2.0-beta.1 cannot resolve lodash](https://github.com/element-plus/element-plus/issues/4132)
- [Struggling to use with WebPack5](https://github.com/neutrinojs/webpack-chain/issues/296)
# 参考文章
- [vuepress集成element-ui](http://xuedingmiao.com/blog/vuepress_element.html)
- [webpack打包导入的文件时候省略后缀名设置](https://blog.csdn.net/weixin_43582611/article/details/103702426)
- [npm:webpack-chain](https://www.npmjs.com/package/webpack-chain)