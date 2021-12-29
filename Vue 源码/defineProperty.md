# Object.defineProperty
- 作用：直接在一个对象上定义一个新属性，或者修改一个对象的现有属性
- 语法: `Object.defineProperty(obj, prop, descriptor)`
- 参数： 
  - `obj` 要在其上定义属性的对象 
  - `prop` 要定义或修改的属性的名称
  - `descriptor` 将被定义或修改的属性描述

- 数据描述：
  - `configurable` 是否可以删除目标属性。默认 `false`
  - `enumerable` 此属性是否可以被枚举。默认 `false`
  - `value` 此属性对应的值，默认为 `undefined`
  - `writable` 属性的值是否可以被重写。默认 `false`

- 访问器描述
  - `getter` 是一种获得属性值的方法
  - `setter` 是一种设置属性值得方法
  - 可以写 `configurable` 、`enumerable`
  - 不能写 `value`、`writable`
