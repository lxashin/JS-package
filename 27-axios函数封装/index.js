function axios () {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send(data)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            result: xhr.response
          })
        } else {
          reject(new Error('请求错误，错误的状态码为' + xhr.status))
        }
      }
    }
  })
}