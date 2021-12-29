// 浅拷贝
function copy(obj) {
  var newObj = {};
  for (var attr in obj) {
    newObj[attr] = obj[attr];
  }
  return newObj;
}

// 深拷贝
function deepCody() {
  if (typeof obj != 'object') {
    return obj;
  }
  var newObj = {};
  for (var attr in obj) {
    newObj[attr] = deepCody(obj[attr]);
  }
  return newObj;
}
