function apply (Fn, obj, args) {
  obj.temp = Fn
  let res = obj.temp(...args)
  delete obj.temp
  return res
}