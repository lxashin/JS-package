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

**对象合并，深浅拷贝的封装**
浅拷贝

```JS
function clone (target) {
  // 类型判断  只有是引用数据类型才拷贝
  if (typeof target === 'object' && target !== 'null') {
    if (Array.isArray(target)) {
      // 如果是数组
      return [...target]
    } else {
      return { ...target }
    }
  } else {
    // 基本数据类型
    return target
  }
}

// es5中浅拷贝
function clone2 (target) {
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器
    let res = Array.isArray(target) ? [] : {}
    for (let key in target) {
      //判断当前对象是否包含该属性,因为hasOwnProperty会把原型上的也遍历出来
      if (target.hasOwnProperty(key)) {
        res[key] = target[key]
      }

    }
    return res
  } else {
    return target
  }
}

```

深拷贝

```JS
// JSON实现深拷贝此方法不能克隆function，也不能循环引用
function deepClone (target) {
  let res = JSON.stringify(target)
  let data = JSON.parse(res)
  return data
}

// 使用递归实现深拷贝,可以克隆方法，但是也不能循环引用
function deepClone2 (target) {
  if (typeof target == 'object' && target !== null) {
    let res = Array.isArray(target) ? [] : {}
    for (let key in target) {
      // 判断是不是target本身的属性（for in循环会遍历原型上的属性）
      if (target.hasOwnProperty(key)) {
        res[key] = deepClone2(target[key])
      }
    }
    return res
  } else {
    return target
  }
}
```
