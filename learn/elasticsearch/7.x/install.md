# ElasticSearch安装

## 安装Java



## 下载ElasticSearch

下载地址：https://www.elastic.co/cn/downloads/

历史版本下载：https://www.elastic.co/cn/downloads/past-releases/

解压即可（尽量将ElasticSearch相关工具放在统一目录下）

![img](https://liuyou-images.oss-cn-hangzhou.aliyuncs.com/markdown/20201124211311.png)

```
bin 启动文件目录
config 配置文件目录
    1og4j2 日志配置文件
    jvm.options java 虚拟机相关的配置(默认启动占1g内存，内容不够需要自己调整)
    elasticsearch.ym1 elasticsearch 的配置文件! 默认9200端口!跨域!
1ib 
    相关jar包
modules 功能模块目录
plugins 插件目录
    ik分词器
```



## 安装ElasticSearch

```bash
cd elasticsearch-<version>
./bin/elasticsearch
```
::: tip
1. 如果你想把 Elasticsearch 作为一个守护进程在后台运行，那么可以在后面添加参数 `-d` 。
2. 如果你是在 Windows 上面运行 Elasticseach，你应该运行 `bin\elasticsearch.bat` 而不是 `bin\elasticsearch` 。

:::

## 测试

```bash
curl 'http://localhost:9200/?pretty'
```

