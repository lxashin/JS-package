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
