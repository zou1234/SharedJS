# sharedActionSheetData(Object)
对 Vant ActionSheet 组件进行接口请求和数据处理封装，一键式得到业务中的数据格式。目前仅支持单列数据业务（“年” 或者 “月”）

## 参数（Object）
1. **request** (Object)：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **url** (String)： 接口服务地址
3. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
4. **param** (Object)： 接口请求参数
5. **query_key** (String)：后端 query_key 值（业务特殊定制，其他公司或个人可不予理会）
6. **configData** (Object | Array)： 详细请参考 sharedArrayOperate


## 返回值（Object）
1. **newData** (Object)：处理后的新数据，可直接用
2. **rawData** (Object)：原接口返回数据

## 引入
```javascript
import { sharedActionSheetData } from "sharedjs";
```

## 例子
```javascript
  const configData = [
  {
    label: "name",
    value: 'ND',
    unit: '年'
  }]

const data = await sharedActionSheetData({
  request: request,
  method: "GET",
  query_key: 'yf-zrzy-zygl-tdgy-003',
  configData
})
console.log(data);
```
输出结果

![](/SharedJS/markdown/sharedActionSheetData-1.png)

原接口请求数据

![](/markdown/sharedActionSheetData-2.png)
