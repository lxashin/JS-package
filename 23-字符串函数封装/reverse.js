// 字符串反转
function reverse (str) {
  // 先将字符串转为数组
  let arr = str.split('')
  // let arr = [...str]
  arr.reverse()
  return arr.join('')
}