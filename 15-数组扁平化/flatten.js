// 数组扁平化，将多维数组转化为一维数组
function flatten (arr) {
  let res = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item)) // 递归
    } else {
      res = res.concat(item)
    }

  })
  return res
}

function flatten2 (arr) {
  let res = [...arr]
  while (res.some(item => Array.isArray(item))) {
    res = [].concat(...res)
    console.log(res)
  }
  return res
}