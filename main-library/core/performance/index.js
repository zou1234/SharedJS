/**
 * @description：防抖函数
 *
 * */
export function sharedAntiShake(fn, delay) {
  let timer = null;
  return function(
  ) {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(
    ) {
      fn.apply(context, args);
    }, delay);
  }
}

/**
 * @description：节流函数
 *
 * */
export function sharedThrottle(fn, delay) {
  let timer = null;
  return function(
  ) {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function(
      ) {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}
