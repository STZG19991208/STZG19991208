
# 集成友盟统计

## 获取 cnzz 统计代码
登录友盟统计后台
创建站点
复制统计代码

## 配置 cnzz 统计代码
```shell
vi ./config.js
```

```js
head: [
    // 添加cnzz统计
    [
        "script",
        {
        src: "https://v1.cnzz.com/z_stat.php?id=1278957718&web_id=1278957718"
        }
    ]
]
```

## 切换页面时手工上报 pv 统计
目前存在一个问题，仅在访问首页或者刷新页面时，才会触发 cnzz 统计。

::: tip
因为 vuepress 是基于 vue 的单页面应用，所以页面切换过程中，不会重新加载页面，故而不会触发 cnzz 统计。
:::

解决方法: 监听路由切换事件，当切换页面时, 手动上报 cnzz 统计, 具体实现如下:
```shell
vi .vuepress/enhanceApp.js
```

```js
export default ({ router }) => {
  /**
  * 路由切换事件处理
  */
  router.beforeEach((to, from, next) => {
  console.log("切换路由", to.fullPath, from.fullPath);

    //发送cnzz的pv统计
    if (typeof _czc != "undefined") {
      if (to.path) {
        _czc.push(["_trackPageview", to.fullPath, from.fullPath]);
        console.log("上报cnzz统计", to.fullPath);
      }
    }

    // continue
    next();
  });
};
```

::: tip
每当切换路由就会触发统计上报。所以发生如下行为时会上报统计:

首次访问
刷新页面
切换到当前文章的其它章节
切换锚点，URL 会变化，所以会触发路由变化事件。
所以，当用户完整得浏览完一篇博客时，可能会触发多次上报。
:::