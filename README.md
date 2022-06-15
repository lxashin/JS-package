### JS 函数封装--封装属于自己的函数库

**call、apply、bind 函数封装**

```JS
function call (Fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis  // 等于全局对象
  }
  //为obj创建临时方法
  obj.temp = Fn
  // 调用temp方法
  let result = obj.temp(...args)
  //删除temp方法
  delete obj.temp
  return result
}

```

**函数防抖节流**

```JS
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
```

**数组方法 map、reduce、filter 等封装**

```JS
function map (arr, callback) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i))
  }
  return res
}

```
