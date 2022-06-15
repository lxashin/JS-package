// 数组分块 例如[1,2,3,4,5,6,7,8,9] 输入4分为[[1,2,3,4],[5,6,7,8],[9]]
function chunk (arr, size) {
  const res = []
  let temp = []
  arr.forEach(item => {
    if (temp.length === 0) {
      // 如果temp的长度为0，将temp临时数组压入res中
      res.push(temp)
    }
    // 先压入空数组，再往空数组中压入数据
    temp.push(item)
    //当temp长度满了，重新置为空
    if (temp.length === size) {
      temp = []
    }
  })
  return res
}