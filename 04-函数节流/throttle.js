function throttle (callback, time) {
  // 设置开始时间
  let start = 0
  // 返回结果是一个函数
  return function (e) {
    let now = Date.now()
    if (now - start >= time) {
      // 执行回调
      callback.call(this, e)
      // 修改开始时间
      start = now
    }
  }
}