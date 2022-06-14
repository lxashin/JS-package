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