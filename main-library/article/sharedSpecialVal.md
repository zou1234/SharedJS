# sharedSpecialVal(value, ident)
对特殊数据做格式转换
## 参数
1. **value**（String）：值
2. **ident**（String）： 遇到特殊数据时候返回的统一标记，默认返回 “--”

## 引入
```javascript
import { sharedSpecialVal } form "sharedjs";
```
## 例子
```javascript
sharedSpecialVal(null) 

// 输出结果 "--" 

sharedSpecialVal(undefined)

// 输出结果 "--" 

sharedSpecialVal(NaN)

// 输出结果 "--" 

sharedSpecialVal(0) 

// 输出结果 0

sharedSpecialVal(null, '-')

// 输出结果 "--" 

sharedSpecialVal(undefined, '-')

// 输出结果 "--" 
``` 
