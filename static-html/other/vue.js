// 发布者
class Vue {
  constructor(options) {
    this.options = options;
    // 获取数据
    this.$data = options.data;
    // 获取对象
    this.$el = document.querySelector(options.el);
    // 存放订阅者
    this._directives = {};

    this.Observer(this.$data);
    this.Compile(this.$el);
  }

  // 劫持数据
  Observer(data) {
    // 更新视图 是全部更新 还是局部
    for (let key in data) {
      this._directives[key] = [];
      let val = data[key];
      let direct = this._directives[key];

      Object.defineProperty(this.$data, key, {
        get: function () {
          return val;
        },
        set: function (newVal) {
          if (newVal !== val) {
            val = newVal;
            direct.forEach(watch => {
              watch.update();
            });
          }
        }
      })
    }
  }

  // 解析指令
  Compile(el) {
    // 获取App下面的子元素
    let nodes = el.children;
    for (let i = 0; i < nodes.length; i++) {
      // 当前元素
      let node = nodes[i];
      // 如果当前元素含有子元素就递归
      if (node.children.length) {
        this.Compile(node);
      }
      // 查找v-text
      if (node.hasAttribute('v-text')) {
        // 获取属性里面的值
        let attrVal = node.getAttribute('v-text');
        this._directives[attrVal].push(new Watcher(node, attrVal, this, 'innerHTML'));
      }
      // 查找v-model
      if (node.hasAttribute('v-model')) {
        // 获取属性里面的值
        let _this = this;
        let attrVal = node.getAttribute('v-model');
        this._directives[attrVal].push(new Watcher(node, attrVal, this, 'value'));
        node.addEventListener('input', (
          function () {
            return function () {
              _this.$data[attrVal] = node.value;
            }
          }
        )());
      }
    }
  }
}

// 订阅者
class Watcher {
  constructor(el, vm, mySelf, attr) {
    this.el = el;
    this.vm = vm;
    this.mySelf = mySelf;
    this.attr = attr;

    // 初始化数据
    this.update();
  }

  update() {
    this.el[this.attr] = this.mySelf.$data[this.vm];
  }
}
