# sharedAntiShake(fn, delay)
   防抖是针对js中事件被连续触发导致连续执行函数所做的防范措施。 它可以延迟函数的执行，直到指定的时间段内没有进一步的函数调用发生。当有函数调用发生时，它将取消前一个调用并等待一段时间后再执行最后一个调用。 在这个过程中，函数只会执行一次，从而减少了代码的重复执行和资源的浪费。
## 参数
* fn (Function)：回调
* delay (Number)： 时间

## 引入
```javascript
import { sharedAntiShake } from "sharedjs";
```
## 例子
```javascript
const antiShake = sharedAntiShake(function() {
  console.log('antiShake');
}, 1000);

antiShake();
antiShake();
antiShake(); // 只会触发一次输出
``` 
