# sharedArrayOperate(Object)

对数组对象里属性修改，支持单个和多个

## 参数

1. **sourceData** (Object)：
  - ● 源数据, 必须数组里面嵌套对象格式。例如：[ {xxx: 1},{xxx: 23} ]
2. **configData** (Object | Array)
  - ● label：前端要生成属性名
  - ● value：接口数据源被改的属性名
  - ● unit： 单位

## 引入

```javascript
import {sharedArrayOperate} form "sharedjs";
```

## 例子

```javascript
// 源数据
 const sourceData = [
  {"ZKZ": "这是一个标题", "KQMJ": 14, "ND": 2021},
  {"ZKZ": "这是一个标题", "KQMJ": 13, "ND": 2022},
  {"ZKZ": "这是一个标题", "KQMJ": 12, "ND": 2023},
]

// 配置目标
const configData = [
  {
    label: "title",
    value: 'ZKZ'
  },
  {
    label: "name",
    value: 'ND',
    unit: '年'
  }]

const data = sharedArrayOperate({sourceData, configData})

console.log(data);

// 输出结果如下

[
  {"title":"这是一个标题","name":"2021年"},
  {"title":"这是一个标题","name":"2022年"},
  {"title":"这是一个标题","name":"2023年"}
]
```
[//]: # (![]&#40;/static/markdown/sharedArrayOperate-1.png&#41;)
![](/markdown/sharedArrayOperate-1.png)


