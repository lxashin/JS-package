function axios ({ url, method, params, data }) {
  // 方法转化为大写
  method = method.toUpperCase()
  return new Promise((resolve, reject) => {
    //ajax四步骤
    //1.创建对象
    const xhr = new XMLHttpRequest()

    //2.初始化
    // 处理params对象为a=100&b=200
    let str = ''
    for (let k in params) {
      str += `${k}=${params[k]}&`
    }
    str = str.slice(0, -1)
    if (method == 'GET') {
      // 如果是get请求，在url后面拼接？和params
      xhr.open(method, url + '?' + str)
    } else {
      xhr.open(method, url)
    }

    //3.发送  判断是不是get请求，如果不是的话要设置content-type类型，设置请求体
    if (method == 'POST' || method == 'PUT' || method == 'DELETE' || method == 'PATCH') {
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
    // 设置响应结果类型为json数据格式
    xhr.responseType = 'json'

    //4.处理请求响应状态码
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //判断响应状态码 2xx
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            statue: xhr.status,
            message: xhr.statusText,
            result: xhr.response
          })
        } else {
          reject(new Error('请求失败，失败的状态码为' + xhr.status))
        }
      }
    }
  })
}

axios.get = function (url, option) {
  let config = Object.assign(option, { method: 'get', url })
  console.log(config)
  return axios(config)
}
axios.post = function (url, option) {
  let config = Object.assign(option, { method: 'post', url })
  console.log(config)
  return axios(config)
}
axios.put = function (url, option) {
  let config = Object.assign(option, { method: 'put', url })
  return axios(config)
}
axios.delete = function (url, option) {
  let config = Object.assign(option, { method: 'delete', url })
  return axios(config)
}
