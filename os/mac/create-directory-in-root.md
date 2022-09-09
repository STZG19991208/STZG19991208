# Mac —— 根目录创建文件、文件夹

##  问题描述
```bash
mkdir: test: Operation not supported
```

## 问题分析

1. mac os引入了系统完整性保护（SIP）机制，无法在/、/usr目录下新建文件

## 解决方案

### macOS 10.11以下版本

1. 执行`sudo vim /etc/auto_master`，注释掉`/home`选项。

```bash
sudo vim /etc/auto_master
```

> 修改前：/home auto_home -nobrowse,hidefromfinder
> 修改后：#/home auto_home -nobrowse,hidefromfinder

将/home这一行给注释掉，这里需要注意一下，这个文件是只读的，保存的时候需要加感叹号强制保存。

2. 回到根目录（这一步很重要）

```bash
cd /
sudo automount
```
3. 创建软连接

> 此目录是Mac系统保留的目录，在升级或修复系统的时候都会抹除此目录下的数据，所以可以建立个链接来保存数据

```bash
sudo ln -s /Users/shentuzhigang/Documents /home/shentuzhigang/
```

### macOS 10.11 以上版本
#### SIP
> SIP 全称为「System Integrity Protection」即「系统完整性保护」，是 OS X El Capitan 时开始采用的一项安全技术，SIP 将一些文件目录和系统应用保护了起来。但这会影响我们一些使用或设置，比如：更改系统应用图标、终端操作系统目录文件提示「Operation not permitted」、Finder 无法编辑系统目录里的文件。

1. 关闭SIP

   将 Mac 开机，立即在键盘上按住 Command ⌘ + R，直到看到 Apple 标志或旋转的地球时松开。看到「实用工具」窗口时，恢复功能启动即完成。
   
   ```bash
   csrutil disable
   ```

2. 重启系统

3. 创建文件夹
```bash
csrutil status
System Integrity Protection status: disabled.

sudo mount -uw /
sudo mkdir /home
```
4. 启用
   
   ```bash
   csrutil enable
   ```

### macOS 11.01 以上版本

1. 创建任一文件夹
```bash
mkdir -p ~/data # 即/Users/shentuzhigang/data
```
2. 增加关联
```bash
sudo vi /etc/synthetic.conf
data  /Users/shentuzhigang/data 
# 注意
# data前面没有/
# 不支持多级目录
# data与后面内容使用tab分割
```
3. 重启系统
```bash
sudo reboot
# 重启后，系统会在根目录/下创建data目录，如下：（这里是一种软连接方式）
~ ll /data
lrwxr-xr-x  1 root  wheel    34B  2 20 17:31 /data -> /Users/shentuzhigang/data
```

## 参考文章

- [MAC在home下新建文件夹报错“mkdir: test: Operation not supported”](https://www.cnblogs.com/mpyidudu/p/15460284.html)

- [在 MacOS 系统下创建 /home 目录的方法](https://cloud.tencent.com/developer/article/1914167)