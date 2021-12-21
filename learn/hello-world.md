---
category: Hello World

tags: 
 - Hello World
---
# Hello World

输出"Hello World!"

C语言版本

```c
#include <stdio.h>
#include <stdlib.h>
    
int main(int argc, char *argv[]){

    printf("Hello World!\n");
    return 0;

}

```

C++版本

```cpp
#include <iostream>
    
using namespace std;

int main()
{
    cout << "Hello world!" << endl;
    return 0;
}
```

Visual C++版本

[Visual Studio 2019 + Visual C++——创建Visual C++ Hello World! 程序](https://shentuzhigang.blog.csdn.net/article/details/104513395)

C#版本

```csharp
using System;  //Using 关键字, System命名空间！
namespace HelloWorldApplication //namespace声明命名空间,包含一个helloworld的类！
{
    /* 类名为 HelloWorld */
    class HelloWorld  
    {
        /* main函数 */
        static void Main(string[] args)//main函数是C#的接入口！
        {
            /* 我的第一个 C# 程序 */
            Console.WriteLine("Hello World!");//这个一句输出语句！
            Console.ReadKey();//这个语句为了防止输出窗口一跳而过！
        }
    }
}
```

JAVA版本

```java
public class HelloWorld {
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

Shell 版本

```bash
echo "Hello World!"
```

Kotlin

```kotlin
fun main(args: Array<String>) {
    println("Hello World!")
}
```

Python版本

```python
print('Hello World!')
```

HTML版本

```html

<html>
<body>
Hello World!
</body>
</html>
```

JavaScript版本

```javascript
console.log("Hello World!");
```

PHP版本

```php
<?php
	echo "Hello World!";
?>
```

Go版本

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello World!")
}
```
