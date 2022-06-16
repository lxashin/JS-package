function mergeObject (...objs) {
  let res = {}
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (res.hasOwnProperty(key)) {
        //如果有，则需要合并,如果两个值相等则不合并
        if (res[key] !== obj[key]) {
          res[key] = [].concat(res[key], obj[key])
        }


      } else {
        // 如果不存在key则直接往res里面填充
        res[key] = obj[key]
      }
    })
  })
  return res
}