function newInstance (Fn, ...args) {
  //1，创建新对象
  let obj = {}
  //2.将新对象的__proto__指向构造函数Fn的prototype
  obj.__proto__ = Fn.prototype
  //3.执行构造函数并改变this指向
  let res = Fn.call(obj, ...args)
  //4.返回新对象,判断返回的是基本数据类型还是引用数据类型
  return res instanceof Object ? res : obj
}