function filter (arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    // 循环判断回调是否为真，如果为真压入result中
    let res = callback(arr[i], i)
    if (res) {
      result.push(arr[i])
    }
  }
  return result
}