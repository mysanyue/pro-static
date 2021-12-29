/**
 * @description 参数说明
 * @param { Date } t 当前时间
 * @param { Number } b 初始值
 * @param { Number } c 变化量
 * @param { Date } d 持续时间
 * @returns 目标点
 */

var Tween = {
  linear: function(t, b, c, d) {
    //匀速
    return (c * t) / d + b;
  },
  easeIn: function(t, b, c, d) {
    //加速曲线
    return c * (t /= d) * t + b;
  },
  easeOut: function(t, b, c, d) {
    //减速曲线
    return -c * (t /= d) * (t - 2) + b;
  },
  easeBoth: function(t, b, c, d) {
    //加速减速曲线
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t + b;
    }
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInStrong: function(t, b, c, d) {
    //加加速曲线
    return c * (t /= d) * t * t * t + b;
  },
  easeOutStrong: function(t, b, c, d) {
    //减减速曲线
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeBothStrong: function(t, b, c, d) {
    //加加速减减速曲线
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t * t + b;
    }
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  elasticIn: function(t, b, c, d, a, p) {
    //正弦衰减曲线（弹动渐入）
    if (t === 0) {
      return b;
    }
    if ((t /= d) == 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
  },
  elasticOut: function(t, b, c, d, a, p) {
    //正弦增强曲线（弹动渐出）
    if (t === 0) {
      return b;
    }
    if ((t /= d) == 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
  },
  elasticBoth: function(t, b, c, d, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) == 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else {
      var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
  },
  backIn: function(t, b, c, d, s) {
    //回退加速（回退渐入）
    if (typeof s == 'undefined') {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  backOut: function(t, b, c, d, s) {
    if (typeof s == 'undefined') {
      s = 3.70158; //回缩的距离
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  backBoth: function(t, b, c, d, s) {
    if (typeof s == 'undefined') {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  bounceIn: function(t, b, c, d) {
    //弹球减振（弹球渐出）
    return c - Tween['bounceOut'](d - t, 0, c, d) + b;
  },
  bounceOut: function(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    }
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  },
  bounceBoth: function(t, b, c, d) {
    if (t < d / 2) {
      return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b;
    }
    return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
};

// function css(element, attr, val) {
//   if (attr == "scale" || attr == "scaleX" ||
//     attr == "scaleY" || attr == "scaleZ" ||
//     attr == "rotateX" || attr == "rotateY" ||
//     attr == "rotateZ" || attr == "rotate" ||
//     attr == "skewX" || attr == "skewY" ||
//     attr == "translateX" || attr == "translateY" ||
//     attr == "translateZ") {
//     return cssTransform(element, attr, val);
//   }
//   if (arguments.length == 2) {
//     var val = getComputedStyle(element)[attr];
//     if (attr == 'opacity') {
//       val = Math.round(val * 100);
//     }
//     return parseFloat(val);
//   }
//   if (attr == "opacity") {
//     element.style.opacity = val / 100;
//   } else {
//     element.style[attr] = val + 'px';
//   }
// }

function css(el, attr, val) {
  var transform = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'translateX', 'translateY', 'translateZ'];
  for (var i = 0; i < transform.length; i++) {
    if (attr == transform[i]) {
      return setTransform(el, attr, val);
    }
  }
  if (arguments.length == 2) {
    if (el.currentStyle) {
      val = el.currentStyle[attr];
    } else {
      val = getComputedStyle(el)[attr];
    }
    if (attr == "opacity") {
      return val * 100;
    }
    return parseFloat(val);
  } else {
    if (attr == "opacity") {
      el.style.opacity = val / 100;
      el.style.filter = "alpha(opacity= " + val + ")";
    } else if (attr == "zIndex") {
      el.style[attr] = Math.round(val);
    } else {
      el.style[attr] = val + "px";
    }
  }
}

function cssTransform(element, attr, val) {
  if (!element.transform) {
    element.transform = {};
  }
  if (typeof val === 'undefined') {
    if (typeof element.transform[attr] === 'undefined') {
      switch (attr) {
        case 'scale':
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          element.transform[attr] = 100;
          break;
        default:
          element.transform[attr] = 0;
      }
    }
    return element.transform[attr];
  } else {
    element.transform[attr] = val;
    var transformVal = '';
    for (var s in element.transform) {
      switch (s) {
        case 'scale':
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          transformVal += ' ' + s + '(' + (element.transform[s] / 100) + ')';
          break;
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
        case 'rotateZ':
        case 'skewX':
        case 'skewY':
          transformVal += ' ' + s + '(' + element.transform[s] + 'deg)';
          break;
        default:
          transformVal += ' ' + s + '(' + element.transform[s] + 'px)';
      }
    }
    element.style.WebkitTransform = element.style.transform = transformVal;
  }
}

/**
 * @ MTeen执行
 * @param { Object } init 
 * init 参数
{
  el: obj,
  target: { attr: val },
  time: 1000,
  type: 'linear',
  callBack: function() {
    // 动画执行完了
  },
  callIn: function() {
    // 同步执行
  }
}
 */
function MTween(init) {
  var t = 0;
  var b = {};
  var c = {};
  var d = init.time / 20;
  for (var s in init.target) {
    b[s] = css(init.el, s);
    c[s] = init.target[s] - b[s];
  }
  clearInterval(init.el.timer);
  init.el.timer = setInterval(function() {
    t++;
    if (t > d) {
      clearInterval(init.el.timer);
      init.callBack && init.callBack.call(init.el);
    } else {
      init.callIn && init.callIn.call(init.el);
      for (var s in b) {
        var val = Number((Tween[init.type](t, b[s], c[s], d)).toFixed(2));
        css(init.el, s, val);
      }
    }
  }, 20);
}