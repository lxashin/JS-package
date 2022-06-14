// 当操作停止时才执行回调
function debounce (callback, time) {
  let timeId = null
  return function (e) {
    if (time !== null) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      callback.call(this, e)
      timeId = null
    }, time)
  }
}

// 执行第一次回调，当停止操作time秒后再操作的话执行
function debounce2 (callback, time) {
  let timeId = null

  return function (e) {
    let first = !timeId
    if (time !== null) {
      clearTimeout(timeId)
    }
    if (first) {
      callback.call(this, e)
    }
    timeId = setTimeout(() => {
      timeId = null
    }, time)
  }
}