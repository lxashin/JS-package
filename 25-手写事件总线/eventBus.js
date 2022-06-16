let eventBus = {
  // 保存类型的容器和回调
  callbacks: {}
}

eventBus.on = function (type, callback) {
  //判断callback存不存在该类型事件
  if (this.callbacks[type]) {
    this.callbacks[type].push(callback)
  } else {
    // 不存在，直接存进去
    this.callbacks[type] = [callback]
  }
}

eventBus.emit = function (type, data) {
  if (this.callbacks[type] && this.callbacks[type].length > 0) {
    this.callbacks[type].forEach(callback => {
      callback(data)
    })
  }

}

eventBus.off = function (eventName) {
  if (eventName) {
    // 若传入了eventName则只删除对应的事件类型
    delete this.callbacks[eventName]
  } else {
    // 若不传入对应的事件名，则删除所有
    this.callbacks = {}
  }
}