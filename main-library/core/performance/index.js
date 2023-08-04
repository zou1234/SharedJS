/**
 * @description：防抖函数
 * @param fn: 回调函数
 * @param delay: 时间
 * */
export function sharedAntiShake(fn, delay) {
  console.log("sharedAntiShake 测试")
  let timeOut = null;
  return function() {
    if(timeOut) clearInterval(timeOut)
    timeOut = setTimeout(fn, delay)
  }
}

/**
 * @description：节流函数
 * @param fn: 回调函数
 * @param delay: 时间
 * */
export function sharedThrottle(fn, delay){
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}
