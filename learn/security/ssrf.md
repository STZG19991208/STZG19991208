# SSRF

## 概述

SSRF(Server-Side Request Forgery:服务器端请求伪造) 是一种由攻击者构造形成由服务端发起请求的一个安全漏洞。一般情况下，SSRF攻击的目标是从外网无法访问的内部系统。通常发生在图片转储，文本加载等地方。

![请输入图片描述](../../assets/images/ssrf.png)

## 原理

由于服务端提供了从其他服务器应用获取数据的功能且没有对目标地址做过滤与限制。比如从指定URL地址获取网页文本内容，加载指定地址的图片，下载等等。利用的是服务端的请求伪造。SSRF是利用存在缺陷的web应用作为代理攻击远程和本地的服务器。

## 漏洞场景

1. 分享：通过URL地址分享网页内容

2. 转码服务

3. 在线翻译

4. 图片加载与下载：通过URL地址加载或下载图片

5. 图片、文章收藏功能

6. 未公开的api实现以及其他调用URL的功能

7. 从URL关键字中寻找

## 漏洞利用

1. 可以对外网、内网、本地进行端口扫描，某些情况下端口的Banner会回显出来（比如3306的）；
2. 攻击运行在内网或本地的有漏洞程序（比如溢出）；
3. 可以对内网Web应用进行指纹识别，原理是通过请求默认的文件得到特定的指纹
4. 攻击内网或外网有漏洞的Web应用
5. 使用file协议，dict协议，gropher协议，ftp协议等读取本地文件
5. 通过请其大文件进行Dos攻击
5. 加载外部的恶意木马文件执行
5. 加载内部的敏感文件程序自身的敏感文件
5. 访问内网进行内网端口的扫描、获取内网设备信息、枚举内网服务等。

### 示例

1. @

   对于一个 url 的访问实际上是以 @符后为准的，比如说 xxxx.com@10.10.10.10，则实际上访问的是 10.10.10.10 这个地址。
   
   ```
   http://abc@127.0.0.1
   ```
   
   同
   
   ```
   http://127.0.0.1
   ```

2. 添加端口号

   ```
   http://127.0.0.1:8080
   ```

3. 短地址

   ```
   http://dwz.cn/11SMa
   ```

4. 指向任意ip的域名：xip.io

   例如 10.10.10.10.xip.io 会被解析成 10.10.10.10，详细介绍可以通过 xip.io 这个网站来查看。
   ```
   <pre> <strong> 10.0.0.1</strong>.xip.io   resolves to   10.0.0.1
    www.<strong>10.0.0.1</strong>.xip.io   resolves to   10.0.0.1
    mysite.<strong>10.0.0.1</strong>.xip.io   resolves to   10.0.0.1
    foo.bar.<strong>10.0.0.1</strong>.xip.io   resolves to   10.0.0.1
   ```
   
5. ip地址转换成进制来访问
   将 ip 转换为八进制十进制十六进制这种，同样也可以正常访问

   例如将 10.10.10.10 转换为十进制是 168430090，在浏览器访问 http ://168430090 即访问 10.10.10.10
   
   ```
   115.239.210.26 ＝ 16373751032
   ```
   
6. 代码审计

   ```php
   <?php
     if (isset($_GET['url'])) {
       $content = file_get_contents($_GET['url']); 
       #echo $_GET['url'];
             $filename = ''.rand().'img-tasfa.jpg';
       $fopen  =  fopen($filename,   'wb ');
       #echo $filename;
             file_put_contents($filename, $content);
             #echo $_GET['url'].""; 
             $img = "<img src=\"".$filename."\"/>";
         } 
         echo $img;
   ?>
   ```



## 规避

1. 使用白名单（黑名单），限制HOST。避免应用被用来获取获取内网数据，攻击内网。
2. 对Response信息进行识别，验证远程服务器对请求的响应是比较容易的方法。如果web应用是去获取某一种类型的文件。那么在把返回结果展示给用户之前先验证返回的信息是否符合标准。
3. 需要使用互联网资源（比如贴吧使用网络图片）而无法使用白名单的情况：禁用跳转；然后通过域名获取目标ip，并过滤内部ip；最后识别返回的内容是否与假定内容一致
4. 禁用重定向。防止默认跟随重定向后，继续请求内网地址
4. 统一错误信息，避免用户可以根据错误信息来判断远端服务器的端口状态。
4. 限制请求的端口为http常用的端口，比如，80,443,8080,8090。
4. 禁用不需要的协议。仅仅允许http和https请求。可以防止类似于file:///,gopher://,ftp:// 等引起的问题。

### 示例

```java
public static boolean ssrfCheck(String url) {
    try {
        URL urlObj = new URL(url);
        // 协议校验, 防止伪协议问题
 if(!urlObj.getProtocol().equals("https") && !urlObj.getProtocol().equals("http")) {
            return false;
        }
        // Host 校验
  String domain = urlObj.getHost();
        InetAddress host = InetAddress.getByName(domain);
        if(host.isSiteLocalAddress() || host.isLoopbackAddress()) {
            return false;
        }
        return true;
    } catch (MalformedURLException e) {
        return false;
    } catch (UnknownHostException e) {
        return false;
    }
}
```

## 参考文章

- [SSRF 漏洞记录](https://blog.csdn.net/fageweiketang/article/details/88983921)
- [SSRF详解](https://blog.csdn.net/qq_30135181/article/details/52734225)
- [SSRF原理及攻防解析(简单明了)](https://blog.csdn.net/qq_41565526/article/details/105317682)