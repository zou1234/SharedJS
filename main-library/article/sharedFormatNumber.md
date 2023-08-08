# sharedFormatNumber(data, places)
对数据比较大的做转换处理，例如： 100000 => 10万，1000000000 => 10亿, 默认保留两位小数

## 参数
1. **data** (Number)：数据源
2. **unit** (String)： 特殊值返回标识符默认是“--”

## 引入
```javascript
import { sharedFormatNumber } from "SharedJS";
```
## 例子
```javascript
sharedFormatNumber(100000)

// 输出结果 10万

sharedFormatNumber(1000000000)

// 输出结果 10亿

sharedFormatNumber(1021345000, 1)

// 输出结果 10.2亿

sharedFormatNumber(1021345000, 3)

// 输出结果 10.213亿

``` 
