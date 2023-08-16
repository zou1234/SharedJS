# sharedAxiosRequest(Object)
接口请求统一封装，返回一个promise对象

## 参数
1. **request** (Object) ：传axios对象这种，使用时候项目一般默认全局配置，关于全局配置请继续往下看。
2. **requestKey** (String || Number)：有时候可配置多个request，指定使用第几个请求体，默认是使用（0 -- 第一个， 1 -- 第一个，依此类推...）
3. **url** (String)： 接口url地址
4. **query_key** (String)：后端 query_key 值（业务特殊定制，配合后端接口特性语法糖，正常使用url即可）
5. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
6. **param** (Object)： 接口请求参数

## 全局配置

```javascript
// main.js  
// 内部会自动读取 window.sharedRequest作为请求

// 单个
import axios from "axios";
window.sharedRequest = axios

//多个 
import axios from "axios";
import axios2 from "axios2";
window.sharedRequest = [axios, axios2] // 默认使用第一个
```

## 引入
```javascript
import { sharedAxiosRequest } from "SharedJS";
```

## 例子 1
如果配置了全局axios 不需要再传request
```javascript
// main.js 全局配置
import axios from "axios";
window.sharedRequest = axios // 默认使用第一个

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
// main.js 全局配置
import axios from "axios";
window.sharedRequest = axios // 默认使用第一个

// 请求一个 URL接口
let data = await sharedAxiosRequest({
  method: "POST",
  url: "uia/login",
  param: {
      xx: 1,
      dd: 1
  },
})

console.log(data);
```

## 例子 3
使用 requestKey配置请求体
```javascript
// main.js 全局配置
import axios from "axios";
import axios2 from "axios2";
window.sharedRequest = [axios, axios2] // 默认使用第一个

// 请求一个 URL接口
let data = await sharedAxiosRequest({
  // 配置axios2作为请求体 
  requestKey: 1,
  method: "POST",
  url: "uia/login",
  param: {
      xx: 1,
      dd: 1
  },
})

console.log(data);
```
