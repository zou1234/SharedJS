# sharedGetHttpString(Variable)
接口请求统一封装，返回一个promise对象

## 参数
1. **variable** (String) ：http地址key值

## 引入
```javascript
import { sharedGetHttpString } from "SharedJS";
```

## 例子

```javascript
// 例如当前网页地址为： http://localhost:3000/home?title=2023

const title = sharedGetHttpString("title")

console.log(title)

// 输出结果：2023

```

