// instanceOf检测类型。依据就是构造函数的显示原型prototype是否在实例对象原型链上__proto__的某个对象
function myInstanceOf (obj, Fn) {
  //获取构造函数的显示原型
  let prototype = Fn.prototype
  //获取实例对象的隐式原型
  let proto = obj.__proto__
  while (proto) {
    //循环遍历proto隐式原型
    if (prototype === proto) {
      return true
    }
    proto = proto.__proto__

  }
  return false
}