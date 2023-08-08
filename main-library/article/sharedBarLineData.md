# sharedBarLineData(Object)
对 ManyUI bar-line-chart 柱线图组件接口统一处理

## 参数
1. **request** (Object)：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **url** (String)： 接口服务地址
3. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
4. **param** (Object)： 接口请求参数
5. **query_key** (String)：后端 query_key 值（业务特殊定制，其他公司或个人可不予理会）
6. **format** (Array)： 后端对应字段：label = 文案, value = 数值; 例如{label: 'WDZ', value: 'QY'}

## 返回值（Object）
1. **data** (Object)：后端接口原始数据
2. **xData** (Object)：组件 xData 数据
2. **yData** (Object)：组件 yData 数据

## 引入
```javascript
import { sharedBarLineData } from "sharedjs";
```

## 例子
```javascript
const data =  await sharedBarLineData({
  request: request,
  // query_key: 'yf-zrzy-czks-003',
  url: '/shared/shared-bar-line',
  method: 'GET',
  rowData: 'SZD',
  xUnitCustom: '今年xx数据',
  format: [
    {
      label: '持有',
      value: 'KSS',
      type: 'bar'
    },
    {
      label: '面积',
      value: 'KQMJ',
      type: 'line',
      yAxisIndex: 1
    }
  ]
})

console.log(data);
```
![](/SharedJS/markdown/sharedBarLineData1-1.png)
