(function(root) {
  var _ = {};

  /**
   * @description 数组去重
   * @param { Array } target 数组对象
   * @param { Function } callback 回调函数
   */
  _.uniq = function(target, callback) {
    var result = [];
    var computed;
    for (var i = 0; i < target.length; i++) {
      computed = callback ? callback(target[i]) : target[i];
      if (result.indexOf(computed) === -1) {
        result.push(computed);
      }
    }
    return result;
  }

  /**
   * @description 事件绑定
   * @param { Object } obj 事件对象
   * @param { Object } event 事件原对象
   * @param { Function } fn 执行函数
   */
  _.bind = function(obj, ev, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(ev, fn, false);
    } else {
      obj.attachEvent('on' + ev, function() {
        fn.call(obj);
      });
    }
  }

  /**
   * @description 获取设备可是宽度和高度
   */
  _.view = function() {
    return {
      // 获取浏览器窗口的可视区域的宽度
      w: document.documentElement.clientWidth || document.body.clientWidth,
      // 获取浏览器窗口的可视区域的高度
      h: document.documentElement.clientHeight || document.body.clientHeight,
      // 获取浏览器窗口垂直滚动条的位置
      t: document.documentElement.scrollTop || document.body.scrollTop,
      // 获取浏览器窗口水平滚动条的位置
      l: document.documentElement.scrollLeft || document.body.scrollLeft
    };
  }

  /**
   * @description 添加class
   * @param { Object } obj 添加的对象
   * @param { String } sClass class类
   */
  _.addClass = function(obj, sClass) {
    debugger
    var aClass = obj.className.split(' ');
    if (!obj.className) {
      obj.className = sClass;
      return;
    }
    for (var i = 0; i < aClass.length; i++) {
      if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
  }

  /**
   * @description 移除加class
   * @param { Object } obj 移除的对象
   * @param { String } sClass class类
   */
  _.removeClass = function(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
      if (aClass[i] === sClass) {
        aClass.splice(i, 1);
        obj.className = aClass.join(' ');
        break;
      }
    }
  }
  root._ = _;
})(this);