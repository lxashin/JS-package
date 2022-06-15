// A数组与B数组的差集：A数组里有但是B数组没有的数
function difference (arr1, arr2 = []) {
  if (arr1.length === 0) return []  // 如果arr1数组为空直接返回空数组
  if (arr2.length === 0) return arr1.slice()  // 如果arr2为空，则返回arr1数组，但是不能返回原数组
  let res = arr1.filter(item => !arr2.includes(item))
  return res
}