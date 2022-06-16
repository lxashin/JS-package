function addEventListener (el, type, Fn, selector) {
  // 判断el的类型
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
  // 事件绑定 若没有传递子元素的选择器，则给el元素绑定事件
  if (!selector) {
    el.addEventListener(type, Fn)
  } else {
    el.addEventListener(type, function (e) {
      // 获取点击的目标事件源
      let target = e.target
      console.log(e)
      // 判断选择器与目标元素是否相符合
      if (target.matches(selector)) {
        // 若符合则执行回调
        Fn.call(target, e)
      }
    })
  }

}