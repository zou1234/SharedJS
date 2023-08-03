# sharedAxiosRequest(Object)
接口请求统一封装，返回一个promise对象

## 参数
1. **request** (Object) ：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **url** (String)： 接口服务地址
3. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
4. **param** (Object)： 接口请求参数
5. **query_key** (String)：后端 query_key 值（业务特殊定制，其他公司或个人可不予理会）

[//]: # (![]&#40;/favicon.ico&#41;)


## 全局配置
```javascript
// main.js  
// 内部会自动读取 window.sharedRequest作为请求

import axios from "axios";
window.sharedRequest = axios
```

## 引入
```javascript
import { sharedAxiosRequest } from "sharedjs";
```

## 例子 1
如果配置了全局axios 不需要再传request
```javascript
// 请求一个 query_key接口
let data = await sharedAxiosRequest({
  query_key: "yf-zrzy-zygl-tdgy-003",
  param: {
    xx: 1,
    dd: 1
  },
})

console.log(data);
```

## 例子 2
如果request并未全局配置，必须每个都传，不太建议这么使用哦！
```javascript
import axios from "sharedjs";

// 请求一个 URL接口
let data = await sharedAxiosRequest({
  request: axios,
  method: "POST",
  url: "uia/login",
  param: {
      xx: 1,
      dd: 1
  },
})

console.log(data);
```

