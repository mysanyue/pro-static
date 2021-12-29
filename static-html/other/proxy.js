// 查找dom
{
  const app = document.getElementById('proxy');
  const input = document.getElementById('input');

  // 需要代理的数据对象
  const data = {
    text: 'hello world'
  }

  const handler = {
    // 监控 data 中的 text 属性变化
    set: function (target, prop, value) {
      if (prop === 'text') {
        // 更新值
        target[prop] = value;
        // 更新视图
        app.innerHTML = value;
        input.value = value;
        return true;
      } else {
        return false;
      }
    }
  }

  // 构造 proxy 对象
  const myText = new Proxy(data, handler);

  // 添加input 监听事件
  input.addEventListener('input', function (e) {
    // 更新值
    myText.text = e.target.value;
  }, false);

  // 初始化
  myText.text = data.text;

}
