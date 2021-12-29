## 当 new 去调用一个函数：这个时候函数中的 this 就是创建出来的对象，而且函数的返回值直接就是 this（隐式返回）

```javascript
function Person() {
  this.name = name;
  this.age = age;
  this.sex = sex;

  this.sayName = function() {
    return this.name;
  };
}

var person = new Person('tom', 21, 'famle');
console.log(person.name);
```

使用关键字 new 创建新实例对象经过了以下几步：<br>
1、创建一个新对象<br>
2、将新对象的 `__proto__` 指向构造函数的 `prototype` 对象<br>
3、将构造函数的作用域赋值给新对象 （也就是 this 指向新对象）<br>
4、执行构造函数中的代码（为这个新对象添加属性）<br>
5、返回新的对象

```javascript
var Obj = {};

Obj.__proto__ = Person.prototype();

Person.call(Obj);
```

## 比较稳妥的类型判断方式

```javascript
var arr = [];
Object.prototype.toString.call(arr) == '[object Array]';
```

## 继承

原型链继承<br>

```javascript
var a = {
  name: '小明'
};

var b = cloneObj(a);
b.name = '小青';

function cloneObj(obj) {
  var F = function() {};
  F.prototype = obj;
  return new F();
}
```
