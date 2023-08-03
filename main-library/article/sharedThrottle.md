# sharedThrottle(fn, delay)
节流是指在一段时间内只执行一次回调函数，如果在该时间段内多次触发该事件，则只有第一次触发会执行回调函数。这样可以避免事件的高频触发，减少回调函数的执行次数，从而提高性能。
## 参数
* fn (function)：回调
* delay (Number)： 时间

## 引入
```javascript
import { sharedAntiShake } form "sharedjs";
```
## 例子
```javascript
// 节流函数使用方法
const throttle = sharedThrottle(function() {
  console.log('throttle');
}, 1000);

throttleFn();
throttleFn();
throttleFn(); // 每隔1秒输出一次
``` 
