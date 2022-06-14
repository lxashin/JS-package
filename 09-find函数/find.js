function find (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    if (res) {
      // 如果满足，直接返回当前数
      return arr[i]
    }
  }
  // 没有找到返回undefined
  return undefined
}