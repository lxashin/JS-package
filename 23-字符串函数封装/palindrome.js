// 检测字符串是否为回文
function palindrome (str) {
  let arr = str.split('')
  for (let i = 0; i < str.length >> 1; i++) {
    if (arr[i] !== arr[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

function palindrome2 (str) {
  return reverse(str) === str
}