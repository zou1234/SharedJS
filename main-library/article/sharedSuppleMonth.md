# sharedGetHttpString(Variable)

接口请求数据补月，后端一般只返回有数据月份，柱状图一般要展示1-12月

## 参数

1. **data** (Array) ：数据
2. **key** (String) ：数组要补月份字段

## 引入

```javascript
import {sharedSuppleMonth} from "sharedjs";
```

## 例子

```javascript
 const data = [
  {"YD": 4, "LINGSQY": 211},
  {"YD": 5, "LINGSQY": 231},
  {"YD": 6, "LINGSQY": 271}
]

const newData = sharedSuppleMonth(data, 'YD')

console.log(newData)
  
// 输出结果
  
[
  {"YD": 1},
  {"YD": 2},
  {"YD": 3},
  {"YD": 4, "LINGSQY": 211},
  {"YD": 5, "LINGSQY": 231},
  {"YD": 6, "LINGSQY": 271},
  {"YD": 7},
  {"YD": 8},
  {"YD": 9},
  {"YD": 10},
  {"YD": 11},
  {"YD": 12}
]
```

