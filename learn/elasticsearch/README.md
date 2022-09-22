---
title: Elasticsearch
icon: Elasticsearch 
---

# Elasticsearch

## 简介

Elasticsearch是一个基于Lucene的分布式全文搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。和SQL Server的全文索引（Fulltext Index）有点类似，都是基于分词和分段的全文搜索引擎，具有分词，同义词，词干查询的功能，但是ES天生具有分布式和实时的属性。

Elasticsearch是用Java开发的，并作为Apache许可条款下的开放源码发布，是当前流行的企业级搜索引擎。设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。

## 用于搜索和分析

Elasticsearch是位于Elastic Stack核心的分布式搜索和分析引擎。Logstash和Beats有助于收集，聚合和丰富您的数据并将其存储在Elasticsearch中。使用Kibana，您可以交互式地探索，可视化和共享对数据的见解，并管理和监视堆栈。Elasticsearch是发生索引，搜索和分析魔术的地方。

Elasticsearch为所有类型的数据提供近乎实时的搜索和分析。无论您是结构化文本还是非结构化文本，数字数据或地理空间数据，Elasticsearch都能以支持快速搜索的方式有效地对其进行存储和索引。您不仅可以进行简单的数据检索，还可以汇总信息来发现数据中的趋势和模式。随着数据和查询量的增长，Elasticsearch的分布式特性使您的部署可以随之顺畅地无缝增长。

虽然并非*每个*问题都是搜索问题，但是Elasticsearch可以提供速度和灵活性来处理各种用例中的数据：

- 将搜索框添加到应用或网站
- 存储和分析日志，指标和安全事件数据
- 使用机器学习自动实时建模数据行为
- 使用Elasticsearch作为存储引擎自动化业务工作流程
- 使用Elasticsearch作为地理信息系统（GIS）管理，集成和分析空间信息
- 使用Elasticsearch作为生物信息学研究工具来存储和处理遗传数据

人们使用搜索的新颖方式使我们不断感到惊讶。但是，无论您的用例与其中之一相似，还是您正在使用Elasticsearch解决新问题，在Elasticsearch中处理数据，文档和索引的方式都是相同的。

### 数据输入：文档和索引

Elasticsearch是一个分布式文档存储。Elasticsearch不会将信息存储为列数据的行，而是存储已序列化为JSON文档的复杂数据结构。当集群中有多个Elasticsearch节点时，存储的文档将分布在集群中，并且可以从任何节点立即访问。

存储文档后，将在1秒钟之内[几乎实时](https://www.elastic.co/guide/en/Elasticsearch/reference/current/near-real-time.html)地对其进行索引和完全搜索。Elasticsearch使用称为倒排索引的数据结构，该结构支持非常快速的全文本搜索。反向索引列出了出现在任何文档中的每个唯一单词，并标识了每个单词出现的所有文档。

索引可以看作是文档的优化集合，每个文档都是字段的集合，这些字段是包含您的数据的键值对。默认情况下，Elasticsearch对每个字段中的所有数据建立索引，并且每个索引字段都具有专用的优化数据结构。例如，文本字段存储在倒排索引中，数字字段和地理字段存储在BKD树中。使用按字段数据结构组合并返回搜索结果的能力使Elasticsearch如此之快。

Elasticsearch还具有无模式的能力，这意味着可以在不显式指定如何处理文档中可能出现的每个不同字段的情况下对文档建立索引。启用动态映射后，Elasticsearch会自动检测并将新字段添加到索引。这种默认行为使索引和浏览数据变得容易-只需开始建立索引文档，Elasticsearch就会检测布尔值，浮点数和整数值，日期和字符串并将其映射到适当的Elasticsearch数据类型。

但是，最终，与Elasticsearch相比，您对数据及其使用方式的了解更多。您可以定义规则来控制动态映射，也可以显式定义映射以完全控制字段的存储和索引方式。

定义自己的映射使您能够：

- 区分全文字符串字段和精确值字符串字段
- 执行特定于语言的文本分析
- 优化字段以进行部分匹配
- 使用自定义日期格式
- 使用无法自动检测到的 数据类型，例如`geo_point`和`geo_shape`

为不同的目的以不同的方式对同一字段建立索引通常很有用。例如，您可能希望将字符串字段索引为全文搜索的文本字段和索引，以对数据进行排序或汇总。或者，您可能选择使用多个语言分析器来处理包含用户输入的字符串字段的内容。

在搜索时也使用在索引期间应用于全文字段的分析链。当您查询全文字段时，对查询文本进行相同的分析，然后才能在索引中查找这些术语。

### 信息输出：搜索和分析

尽管您可以将Elasticsearch用作文档存储并检索文档及其元数据，但真正的强大之处在于能够轻松访问基于Apache Lucene搜索引擎库构建的全套搜索功能。

Elasticsearch提供了一个简单，一致的REST API，用于管理您的集群以及建立索引和搜索数据。出于测试目的，您可以直接从命令行或通过Kibana中的开发者控制台轻松提交请求。在您的应用程序中，您可以使用 [Elasticsearch客户端](https://www.elastic.co/guide/en/Elasticsearch/client/index.html) 作为您选择的语言：Java，JavaScript，Go，.NET，PHP，Perl，Python或Ruby。

### 可伸缩性和弹性：集群，节点和分片

Elasticsearch旨在始终可用并根据您的需求进行扩展。它是通过自然分布来实现的。您可以将服务器（节点）添加到集群以增加容量，Elasticsearch会自动在所有可用节点之间分配数据和查询负载。无需大修您的应用程序，Elasticsearch知道如何平衡多节点集群以提供扩展性和高可用性。节点越多越好。

这是如何运作的？在幕后，Elasticsearch索引实际上只是一个或多个物理碎片的逻辑分组，其中每个碎片实际上是一个独立的索引。通过在多个分片之间的索引中分配文档，并在多个节点之间分配这些分片，Elasticsearch可以确保冗余，既可以防止硬件故障，又可以在将节点添加到集群中时提高查询能力。随着集群的增长（或收缩），Elasticsearch会自动迁移碎片以重新平衡集群。

分片有两种类型：主数据库和副本数据库。索引中的每个文档都属于一个主分片。副本分片是主分片的副本。副本可提供数据的冗余副本，以防止硬件故障并提高处理读取请求（例如搜索或检索文档）的能力。

创建索引时，索引中主碎片的数量是固定的，但是副本碎片的数量可以随时更改，而不会中断索引或查询操作。

## 版本历史

- 2010 年 2 月 8 日，Elasticsearch 第一个公开版本发布。

- 2010 年 5 月 14 日，发布第一个具有里程碑意义的初始版本 

  **0.7.0**

  ，具有如下特征：

  - Zen Discovery 自动发现模块；
  - 支持 Groovy Client；
  - 简单的插件管理机制；
  - 更好地支持 icu 分词器；
  - 更多的管理 api。

- 2013 年初，GitHub 抛弃了 Solr，采取 Elasticsearch 来做其 PB 级的搜索。

- 2014 年 2 月 14 日，发布 

  **1.0.0**

   版本，增加如下重要特性：

  - 支持 Snapshot/Restore API 备份恢复 API；
  - 支持聚合分析 Aggregations；
  - 支持 cat api；
  - 支持断路器；
  - 引入 Doc values。

- 2015 年 10 月 28 日，发布 

  **2.0.0**

   版本，有如下重要特性：

  - 增加了 Pipleline Aggregations；
  - query/filter 查询合并，都合并到 query 中，根据不同的上下文执行不同的查询；
  - 压缩存储可配置；
  - Rivers 模块被移除；
  - Multicast 组播发现被移除，成为一个插件，生产环境必须配置单播地址。

- 2016 年 10 月 26 日，发布 

  **5.0.0**

   版本，有如下重大特性变化：

  - Lucene 6.x 的支持，磁盘空间少一半；索引时间少一半；查询性能提升 25%；支持 IPV6；
  - Internal Engine 级别移除了用于避免同一文档并发更新的竞争锁，带来 15%-20% 的性能提升；
  - Shrink API，它可将分片数进行收缩成它的因数，如之前你是 15 个分片，你可以收缩成 5 个或者 3 个又或者 1 个，那么我们就可以想象成这样一种场景，在写入压力非常大的收集阶段，设置足够多的索引，充分利用 shard 的并行写能力，索引写完之后收缩成更少的 shard，提高查询性能；
  - 提供了第一个 Java 原生的 REST 客户端 SDK；
  - IngestNode，之前如果需要对数据进行加工，都是在索引之前进行处理，比如 logstash 可以对日志进行结构化和转换，现在直接在 es 就可以处理了；
  - 提供了 Painless 脚本，代替 Groovy 脚本；
  - 移除 site plugins，就是说 head、bigdesk 都不能直接装 es 里面了，不过可以部署独立站点（反正都是静态文件）或开发 kibana 插件；
  - 新增 Sliced Scroll 类型，现在 Scroll 接口可以并发来进行数据遍历了。每个 Scroll 请求，可以分成多个 Slice 请求，可以理解为切片，各 Slice 独立并行，利用 Scroll 重建或者遍历要快很多倍；
  - 新增了 Profile API；
  - 新增了 Rollover API；
  - 新增 Reindex；
  - 引入新的字段类型 Text/Keyword 来替换 String；
  - 限制索引请求大小，避免大量并发请求压垮 ES；
  - 限制单个请求的 shards 数量，默认 1000 个。

- 2017 年 8 月 31 日，发布 

  **6.0.0**

   版本，具有如下重要特性：

  - 稀疏性 Doc Values 的支持；
  - Index Sorting，即索引阶段的排序；
  - 顺序号的支持，每个 es 的操作都有一个顺序编号（类似增量设计）；
  - 无缝滚动升级；
  - 从 6.0 开始不支持一个 index 里面存在多个 type；
  - Index-template inheritance，索引版本的继承，目前索引模板是所有匹配的都会合并，这样会造成索引模板有一些冲突问题， 6.0 将会只匹配一个，索引创建时也会进行验证；
  - Load aware shard routing， 基于负载的请求路由，目前的搜索请求是全节点轮询，那么性能最慢的节点往往会造成整体的延迟增加，新的实现方式将基于队列的耗费时间自动调节队列长度，负载高的节点的队列长度将减少，让其他节点分摊更多的压力，搜索和索引都将基于这种机制；
  - 已经关闭的索引将也支持 replica 的自动处理，确保数据可靠。

- 2019 年 4 月 10 日，发布 

  **7.0.0**

   版本，具有如下重要特性：

  - 集群连接变化：TransportClient 被废弃，es7 的 java 代码，只能使用 restclient；对于 java 编程，建议采用 High-level-rest-client 的方式操作 ES 集群；
  - ES 程序包默认打包 jdk：7.x 版本的程序包大小变成 300MB+，对比 6.x，包大了 200MB+，这正是 JDK 的大小；
  - 采用基于 Lucene 9.0；
  - 正式废除单个索引下多 Type 的支持，es6 时，官方就提到了 es7 会删除 type，并且 es6 时，已经规定每一个 index 只能有一个 type。在 es7 中，使用默认的 _doc 作为 type，官方说在 8.x 版本会彻底移除 type。api 请求方式也发送变化，如获得某索引的某 ID 的文档：GET index/_doc/id 其中 index 和 id 为具体的值；
  - 引入了真正的内存断路器，它可以更精准地检测出无法处理的请求，并防止它们使单个节点不稳定；
  - Zen2 是 Elasticsearch 的全新集群协调层，提高了可靠性、性能和用户体验，变得更快、更安全，并更易于使用。

## 特点

1.分布式，无需人工搭建集群（solr就需要人为配置，使用Zookeeper作为注册中心）

2.Restful风格，一切API都遵循Rest原则，容易上手

3.近实时搜索，数据更新在Elasticsearch中几乎是完全同步的。

4.一个分布式的实时文档存储，每个字段 可以被索引与搜索

5.一个分布式实时分析搜索引擎

6.能胜任上百个服务节点的扩展，并支持 PB 级别的结构化或者非结构化数据

- 分布式的实时文件存储，每个字段都被索引并可被搜索；
- 分布式的实时分析搜索引擎；
- 可弹性扩展到上百台服务器规模，处理PB级结构化或非结构化数据；
- 开箱即用（安装即可使用），它提供了许多合理的缺省值，并对初学者隐藏了复杂的搜索引擎理论。只需很少的学习既可在生产环境中使用。

## 优点

开箱即用，天生集群 横向扩展性：只需要增加一台服务器，做一点配置，启动一下ES进程就可以并入集群。

分片机制提供更好的分布性：同一个索引分成多个分片（sharding），分而治之的方式来提供处理效率。

高可用：提供复制（replica），一个分片可以设置多个复制分片，使得某台服务器宕机的情况下，集群仍旧可以照常运行；速度快，负载能力强，在面对海量数据时候，搜索速度极快。

## 缺点

各节点数据的一致性问题：其默认的机制是通过多播机制，同步元数据信息，但是在比较繁忙的集群中，可能会由于网络的阻塞，或者节点处理能力达到饱和，导致各数据节点数据不一致——也就是所谓的脑裂问题，这样会使得集群处于不一致状态。

目前并没有一个彻底的方案来解决这个问题，但是可以通过参数配置和节点角色配置来缓解这种情况。 没有细致的权限管理，也就是说，没有像mysql那样的分各种用户，每个用户又有不同的权限。所以在操作上的限制需要自己开发一个系统化来完成。

## 常见使用场景

- 日志实时分析
- 搜索服务
- 数据分析
- 数据监控
- 查询服务
- 后端存储

## 使用案例

（1）维基百科，类似百度百科，牙膏，牙膏的维基百科，全文检索，高亮，搜索推荐,也可以用于对海量的数据进行近实时的数据分析。

（2）The Guardian（国外新闻网站），类似搜狐新闻，用户行为日志（点击，浏览，收藏，评论）+社交网络数据（对某某新闻的相关看法），数据分析，给到每篇新闻文章的作者，让他知道他的文章的公众反馈（好，坏，热门，垃圾，鄙视，崇拜）

（3）Stack Overflow（国外的程序异常讨论论坛），IT问题，程序的报错，提交上去，有人会跟你讨论和回答，全文检索，搜索相关问题和答案，程序报错了，就会将报错信息粘贴到里面去，搜索有没有对应的答案

（4）GitHub（开源代码管理），搜索上千亿行代码

（5）电商网站，检索商品

（6）日志数据分析，logstash采集日志，ES进行复杂的数据分析（ELK技术，Elasticsearch+logstash+kibana）

（7）商品价格监控网站，用户设定某商品的价格阈值，当低于该阈值的时候，发送通知消息给用户，比如说订阅牙膏的监控，如果高露洁牙膏的家庭套装低于50块钱，就通知我，我就去买

（8）BI系统，商业智能，Business Intelligence。比如说有个大型商场集团，BI，分析一下某某区域最近3年的用户消费金额的趋势以及用户群体的组成构成，产出相关的数张报表，**区，最近3年，每年消费金额呈现100%的增长，而且用户群体85%是高级白领，开一个新商场。ES执行数据分析和挖掘，Kibana进行数据可视化

（9）国内：站内搜索（电商，招聘，门户，等等），IT系统搜索（OA，CRM，ERP，等等），数据分析（ES热门的一个使用场景）