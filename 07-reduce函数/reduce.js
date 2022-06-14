function reduce (arr, callback, indexNum) {
  let result = indexNum
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i])
  }
  return result
}