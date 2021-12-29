class mVue {
  constructor(options) {
    this.$options = options;
    this._data = options.data;
    // 数据劫持
    this.observer(this._data);
    this.compile(options.el);
  }

  observer(data) {
    Object.keys(data).forEach(key => {
      let value = data[key];
      let dep = new Dep();

      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          if (Dep.target) {
            dep.addSub(Dep.target);
          }
          return value;
        },
        set(newValue) {
          if (newValue !== value) {
            value = newValue;
          }
          dep.notify(newValue);
        }
      });
    });
  }

  compile(el) {
    let element = document.querySelector(el);
    this.compileNode(element);
  }

  compileNode(element) {
    let childNodes = element.childNodes;

    Array.from(childNodes).forEach(node => {
      if (node.nodeType == 3) {
        let nodeContent = node.textContent;
        let reg = /\{\{s*(\S*)\s*\}\}/;
        if (reg.test(nodeContent)) {
          node.textContent = this._data[RegExp.$1];
          new Watcher(this, RegExp.$1, newValue => {
            node.textContent = newValue;
          });
        }
      } else if (node.nodeType == 1) {
        let attrs = node.attributes;

        Array.from(attrs).forEach(attr => {
          let attrName = attr.name;
          let attrValue = attr.value;

          if (attrName.indexOf('k-') == 0) {
            attrName = attrName.substr(2);
            if (attrName == 'model') {
              node.value = this._data[attrValue];
            }
            node.addEventListener('input', e => {
              this._data[attrValue] = e.target.value;
            });
            new Watcher(this, attrValue, newValue => {
              node.value = newValue;
            });
          }
        });
      }

      if (node.childNodes.length > 0) {
        this.compileNode(node);
      }
    });
  }
}

class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify(newValue) {
    this.subs.forEach(v => v.update(newValue));
  }
}

class Watcher {
  constructor(vm, exp, cb) {
    Dep.target = this;
    vm._data[exp];
    this.cb = cb;
    Dep.target = null;
  }

  update(newValue) {
    this.cb(newValue);
  }
}
