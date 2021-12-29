// function move(obj, attr, target, duration, callback) {
//   var b = parseInt(getComputedStyle(obj)[attr]);
//   var c = target - b;
//   var d = duration;
//   var temp = new Date().getTime();

//   var timer = setInterval(function () {
//     var t = new Date().getTime() - temp;
//     if (t >= d) {
//       clearInterval(timer);
//       t = d;
//     }
//     var v = c / d * t + b;
//     obj.style[attr] = v + 'px';
//     if (t === d) {
//       typeof callback === 'function' && callback();
//     }
//   }, 20);
// }

function movePromise(obj, attr, target, duration) {
  return new Promise((resolve, reject) => {
    var b = parseInt(getComputedStyle(obj)[attr]);
    var c = target - b;
    var d = duration;
    var temp = new Date().getTime();

    var timer = setInterval(function () {
      var t = new Date().getTime() - temp;
      if (t >= d) {
        clearInterval(timer);
        t = d;
      }
      var v = c / d * t + b;
      obj.style[attr] = v + 'px';
      if (t === d) {
        resolve();
      }
    }, 20);
  });
}
