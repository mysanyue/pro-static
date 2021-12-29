/**
 * @description 数组排序
 * @author myzony@qq.com
 */

var SortJs = {
  /**
   * @description 数组对象排序
   * @param { Array } 数据源 
   * @param { String } 需要排序的字段
   * @param { String } asc-升序, desc-降序
   * @returns { Array } 返回排序后的数组，不影响原数据
   */
  orderBy: function(source, prop, orderBy) {
    source = this.deepClone(source);
    this.sort(source, prop, orderBy);
    return source;
  },
  /**
   * @description 分组排序
   * @param { Array } 数据源 
   * @param { Array } 需要排序的字段数组 格式: [{ prop: 'a', orderBy: 'asc' }, { prop: 'b', orderBy: 'asc' },...]
   * @returns { Array } 返回排序后的数组， 不影响原数据
   */
  groupBy: function(source, option) {
    var _this = this;
    source = _this.deepClone(source);
    var result = [];

    function grouporder(data, option) {
      var prop = option[0].prop;
      var orderBy = option[0].orderBy;
      _this.sort(data, prop, orderBy);
      // 分组
      var groupmap = new Map();
      data.forEach((item) => {
        if (groupmap.has(item[prop])) {
          groupmap.get(item[prop]).push(item);
        } else {
          groupmap.set(item[prop], []);
          groupmap.get(item[prop]).push(item);
        }
      });
      // 删除第一个元素值
      option.shift();
      // 遍历分组再排序
      for (var [key, val] of groupmap) {
        if (option.length === 0) {
          result = result.concat(val);
        } else {
          var orderscopy = option.concat();
          grouporder(val, orderscopy);
        }
      }
    }
    grouporder(source, option);
    return result;
  },
  /**
   * @description 排序方法
   * @param { Array } 数据源 
   * @param { String } 需要排序的字段
   * @param { String } asc - 升序, desc - 降序
   */
  sort: function(data, prop, orderBy) {
    data.sort(function(a, b) {
      var convertA = a[prop];
      var convertB = b[prop];
      if (typeof convertA === 'string' && typeof convertB === 'string') {
        if (orderBy.toUpperCase() === 'ASC') {
          return convertA.localeCompare(convertB);
        } else {
          return convertB.localeCompare(convertA);
        }
      } else {
        if (orderBy.toUpperCase() === 'ASC') {
          return convertA - convertB;
        } else {
          return convertB - convertA;
        }
      }
    });
  },
  /**
   * @description 深度克隆
   * @param { Object } 原始对象 
   * @param { Boolean } 是否克隆原型链 
   * @returns { Object } 返回克隆后的对象
   */
  deepClone: function(obj, parent) {
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
            result[key] = this.deepClone(obj[key], {
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
}