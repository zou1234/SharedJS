# sharedKeepDecimal(value, places)
对接数据进行四舍五入
## 参数
1. **value** (Number)：值
2. **places** (Number)： 小数位数

## 引入
```javascript
import { sharedKeepDecimal } form "sharedjs";
```
## 例子
```javascript
sharedKeepDecimal('12.3666', 1)

// 输出结果 12.4

sharedKeepDecimal('12.3666', 2)

// 输出结果 12.37
``` 
