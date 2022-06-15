function concat (arr, ...args) {
  const res = [...arr]
  args.forEach(item => {
    if (Array.isArray(item)) {
      // 如果是数组
      res.push(...item)
    } else {
      res.push(item)
    }
  })
  return res

}