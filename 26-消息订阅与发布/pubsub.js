let Pubsub = {
  // 订阅唯一id,后边可根据id取消订阅
  id: 1,
  callbacks: {
    // pay:{
    //   token1:fn,
    //   token2:fn2
    // }
  }
}

//订阅频道
Pubsub.subscribe = function (channel, callback) {
  let token = 'token' + this.id++
  if (this.callbacks[channel]) {
    // 如果callbacks存在pay属性，则直接压入回调
    this.callbacks[channel][token] = callback
  } else {
    // 如果没有，则初始化一下结构
    this.callbacks[channel] = {
      [token]: callback  //因为是一个变量所以需要中括号
    }
  }
  return token
}

//发布消息
Pubsub.publish = function (channel, data) {
  // 获取当前频道所有的订阅消息
  if (this.callbacks[channel]) {
    Object.values(this.callbacks[channel]).forEach(callback => {
      // 执行所有回调
      callback(data)
    })
  }
}
// 取消订阅
// 1.如果传入flag为空，则取消所有订阅
// 2.传入tokenid字符串
// 3.传入频道字符串
Pubsub.unSubscribe = function (flag) {
  if (flag === undefined) {
    this.callbacks = {}
  } else if (typeof flag === 'string') {
    // 判断传入的是token还是还是频道名称
    if (flag.indexOf('token') === 0) {
      let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))
      if (callbackObj) {
        delete callbackObj[flag]
      }
    } else {
      delete this.callbacks[flag]
    }
  }
}