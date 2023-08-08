# sharedMultiPieData(Object)
对 ManyUI multi-pie-chart饼图组件接口统一处理

## 参数
1. **request** (Object)：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **url** (String)： 接口服务地址
3. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
4. **param** (Object)： 接口请求参数
5. **query_key** (String)：后端 query_key 值（业务特殊定制，其他公司或个人可不予理会）
6. **format** (Array)： 后端对应字段：label = 文案, value = 数值; 例如{label: 'WDZ', value: 'QY'}

## 返回值（Object）
1. **newData** (Object)：处理后的新数据，可直接用
2. **rawData** (Object)：原接口返回数据

## 引入
```javascript
import { sharedMultiPieData } from "sharedjs";
```

## 例子
```javascript
const data = await sharedMultiPieData({
    request: request,
    // 后端接口地址
    query_key: 'yf-zrzy-czks-005',
    // 后端接口匹配字段
    format: {
      label: 'MZ',
      value: 'SL',
    },
  })

console.log(data);
```
输出结果

![](/SharedJS/markdown/sharedMultiPieData-1.png)
