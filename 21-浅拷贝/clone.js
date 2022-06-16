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