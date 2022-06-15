function unique (arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i])
    }
  }
  return res
}

function unique2 (arr) {
  let res = []
  let obj = {}
  arr.forEach(item => {
    if (obj[item] == undefined) {
      obj[item] = true
      res.push(item)
    }
  })
  return res
}

function unique3 (arr) {
  // 创建集合
  let set = new Set(arr)
  let res = [...set]
  return res
}