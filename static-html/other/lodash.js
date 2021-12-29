(function (root) {
  var _ = function (obj) {
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this.wrap = obj;
  }

  // 数组去重
  _.uniq = function (target, callback) {
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

  _.reduce = function () {

  }

  // 开启链式的调用
  _.chain = function (obj) {
    var instence = _(obj);
    instence._chain = true;
    return instence;
  }

  _.prototype.value = function () {
    return this.wrap;
  }

  // 辅助函数
  _.result = function (instence, obj) {
    return instence._chain ? _(obj).chain() : obj;
  }

  _.each = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      callback.call(arr, arr[i]);
    }
  }

  _.functions = function (obj) {
    var result = [];
    for (var key in obj) {
      result.push(key);
    }
    return result;
  }

  // 自身扩展的方法，添加到原型对象中
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (key) {
      var func = obj[key];
      obj.prototype[key] = function () {
        var args = [this.wrap];
        Array.prototype.push.apply(args, arguments);
        return _.result(this, func.apply(this, args));
      }
    });
  }

  _.mixin(_);
  root._ = _;
})(this);
