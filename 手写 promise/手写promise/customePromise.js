; (function () {
  let status = {
    pending: 0,
    fulfilled: 1,
    rejected: 2
  }

  class CustomePromise {
    constructor(func) {
      this._status = status.pending;
      // 收集成功状态要执行的函数
      this.resolvedArr = [];
      // 收集失败状态要执行的函数
      this.rejectedArr = [];
      this._handler(func);
      // 记录resolve函数的传入的参数
      this._value = null;
      // 记录reject函数传入的参数
      this._error = null;
    }

    // 判断value有没有then函数， 并且拿出then函数
    _getThen(value) {
      let type = typeof value;
      if (value && (type === 'object' || type === 'function')) {
        let then;
        if (then = value.then) {
          return then;
        }
      }

      return null;
    }

    // 接收外部传入的函数，调用外部传入的函数
    _handler(func) {
      // 让函数只执行一次
      let done = false;

      func((value) => {
        if (done) return;
        done = true;

        // value有没有then函数
        let then = this._getThen(value);
        if (then) {
          // 拿到then之后，怎么知道这个promise对象完成了？
          // 在拿到then函数上注册成功或失败函数就可以了
          return this._handler(then.bind(value));
        }

        this._resolve(value);
      }, (error) => {
        if (done) return;
        done = true;

        // value有没有then函数
        let then = this._getThen(error);
        if (then) {
          // 拿到then之后，怎么知道这个promise对象完成了？
          // 在拿到then函数上注册成功或失败函数就可以了
          return this._handler(then.bind(error));
        }

        this._reject(error);
      });
    }

    _resolve(value) {
      setTimeout(() => {
        this._status = status.fulfilled;
        this._value = value;

        // 执行所有成功的函数
        this.resolvedArr.forEach(item => item(this._value));
      });
    }

    _reject(error) {
      setTimeout(() => {
        this._status = status.rejected;
        this._error = error;

        // 执行所有失败的函数
        this.rejectedArr.forEach(item => item(this._error));
      });
    }

    // 收集注册的成功或状态或者失败状态要执行的函数
    _done(resolvedFunc, rejectedFunc) {
      let _resolvedFunc = typeof resolvedFunc === 'function' ? resolvedFunc : null;
      let _rejectedFunc = typeof rejectedFunc === 'function' ? rejectedFunc : null;
      if (this._status === 0) {
        if (_resolvedFunc) this.resolvedArr.push(_resolvedFunc);
        if (_rejectedFunc) this.rejectedArr.push(_rejectedFunc);
      } else if (this._status === 1 && resolvedFunc) {
        resolvedFunc(this._value);
      } else if (this._status === 2 && rejectedFunc) {
        rejectedFunc(this._error);
      }
    }

    // 收集注册的成功或状态或者失败状态要执行的函数
    then(resolvedFunc, rejectedFunc) {
      return new CustomePromise((resolve, reject) => {
        return this._done(
          // 收集成功执行函数
          value => {
            if (typeof resolvedFunc !== 'function') {
              return resolve(value);
            }
            resolve(resolvedFunc(value));
          },
          // 收集失败执行函数
          error => {
            if (typeof rejectedFunc !== 'function') {
              return reject(value);
            }
            reject(rejectedFunc(error));
          }
        );
      });
    }
  }

  window.CustomePromise = CustomePromise;
})();
