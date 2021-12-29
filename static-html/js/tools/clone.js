/**
 * @description 深度克隆
 * @author myzony@qq.com
 */

/**
 * @description 深度克隆
 * @param { Object } 原始对象 
 * @param { Boolean } 是否克隆原型链 
 * @returns { Object } 返回克隆后的对象
 */
function clone(obj, parent) {
  var parent = parent || false;
  var result = Array.isArray(obj) ? [] : {};
  var _parent = parent;
  while (_parent) {
    if (_parent.originalParent === obj) {
      return _parent.currentParent;
    }
    _parent = _parent.parent;
  }
  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          result[key] = clone(obj[key], {
            originalParent: obj,
            currentParent: result,
            parent: parent
          });
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  return result;
}