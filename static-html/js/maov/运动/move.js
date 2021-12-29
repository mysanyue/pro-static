/********************************** startMove 完美版 ******************************************* */
/**
 *
 * @param {*} obj 需要获取样式的对象 div
 * @param {*} attr 需要获取样式的属性 width
 */
function getStyle(obj, attr) {
  return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

/**
 * startMove
 * @param {*} obj 改变的对象 div
 * @param {*} json 需要操作的属性　json对象
 * @param {*} endFn 操作完成后的回调函数
 */
function startMove(obj, json, endFn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var stop = true;
    var iCur = 0;
    var iSpeed = 0;

    for (var attr in json) {
      if (attr == 'opacity') {
        iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
      } else {
        iCur = parseInt(getStyle(obj, attr)) || 0;
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
