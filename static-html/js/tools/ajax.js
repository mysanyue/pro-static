function ajax(url, fnSucc, fnFaild) {
  // 1、创建对象
  var oAjax = null
  if (window.XMLHttpRequest) {
    oAjax = new XMLHttpRequest()
  } else {
    oAjax = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 2、连接服务器
  // open('方法', '路径', '是否异步');
  oAjax.open('GET', url, true)

  // 3、发送请求
  oAjax.send()

  // 4、接收服务器的返回
  oAjax.onreadystatechange = function () {
    if (oAjax.readyState == 4) {
      if (oAjax.status == 200) {
        fnSucc(oAjax.responseText)
      } else {
        if (fnFaild) {
          fnFaild()
        }
      }
    }
  }
}
