function slice (arr, start, end) {
  let res = []
  if (arr.length == 0) return []
  // 判断start
  start = start || 0
  if (start >= arr.length) {
    return []
  }
  // 判断end
  end = end || arr.length
  if (end < start) {
    end = arr.length
  }
  for (let i = start; i < end; i++) {
    res.push(arr[i])
  }
  return res
}