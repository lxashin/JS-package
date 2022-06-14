function map (arr, callback) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i))
  }
  return res
}