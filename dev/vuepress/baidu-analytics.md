
# 集成百度统计

## 注册百度统计
[百度统计](https://tongji.baidu.com/web/welcome/login)

[百度统计-用户手册](https://tongji.baidu.com/api/manual/)

1. 注册并登录百度统计账号
   注意 这里有两种账号，本文介绍的是百度普通版统计，而非商用版
   ![在这里插入图片描述](https://shentuzhigang.cn/files/images/202112202207621.png)
2. 新增网站
   ![在这里插入图片描述](https://shentuzhigang.cn/files/images/202112202207402.png)
   通常情况下网站域名和网站首页一致
   网站类型根据自己情况填写


![在这里插入图片描述](https://shentuzhigang.cn/files/images/202112202207608.png)
## 配置
1. 如图所示，复制统计代码
   ![在这里插入图片描述](https://shentuzhigang.cn/files/images/202112202208439.png)


2. 配置 config 文件
   因为 vuepress 是静态渲染服务，所以更换路由不会刷新页面，所以要进行第三步配置，监听路由变化，反馈到百度统计
   ![在这里插入图片描述](https://shentuzhigang.cn/files/images/202112202208125.png)
3. 添加 config 同级文件：enhanceApp.js，添加如下代码
```js
export default ({ router }) => {
  // 路由切换事件处理
  router.beforeEach((to, from, next) => {
    // console.log("切换路由", to.fullPath, from.fullPath);
    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
        // console.log("上报百度统计", to.fullPath);
      }
    }
    next();
  });
};
```
> 每当切换路由就会触发统计上报。所以发生如下行为时会上报统计:
>
> - 首次访问
> - 刷新页面
> - 切换到当前文章的其它章节
> - 切换锚点，URL 会变化，所以会触发路由变化事件。
>
> 所以，当用户完整得浏览完一篇博客时，可能会触发多次上报。
## NPM
```bash
npm i -D @starzkg/vuepress-plugin-baidu-analytics
```

或

```bash
yarn add -D @starzkg/vuepress-plugin-baidu-analytics
```

## 效果



## 参考项目
- [@vuepress/plugin-google-analytics](https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/plugin-google-analytics)
## 参考文章
- [vuepress引入百度统计-图文详解](https://blog.csdn.net/weixin_40532650/article/details/116058032)