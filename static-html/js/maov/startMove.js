/*
 * @Author: myzony@qq.com
 * @Date: 2020-01-12 11:31:16
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-12 09:55:40
 */

/**
 * @description 获取行间css样式
 * @param {*} obj 需要获取样式的对象 div
 * @param {*} attr 需要获取样式的属性 width
 */
function getStyle(obj, attr) {
  return obj.currentStyle ? parseFloat(obj.currentStyle[attr]) : parseFloat(getComputedStyle(obj, false)[attr]);
}

/**
 * @description 运动 - startMove
 * @param {*} obj 改变的对象 div
 * @param {*} json 需要操作的属性　json对象
 * @param {*} endFn 操作完成后的回调函数
 */
function startMove(obj, json, endFn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var stop = true;
    var iSpeed = 0;
    var iCur = 0;

    for (var attr in json) {
      if (attr == 'opacity') {
        iCur = Math.round(getStyle(obj, attr) * 100);
      } else {
        iCur = getStyle(obj, attr) || 0;
      }

      iSpeed = (json[attr] - iCur) / 8;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

      if (attr == 'opacity') {
        obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
        obj.style.opacity = (iCur + iSpeed) / 100;
      } else {
        obj.style[attr] = iCur + iSpeed + 'px';
      }

      if (iCur != json[attr]) {
        stop = false;
      }
    }

    if (stop) {
      clearInterval(obj.timer);
      if (endFn) {
        endFn.call(obj);
      }
    }
  }, 30);
}
