class KPromise {
  static PENDING = 'pending';
  static RESOLVED = 'resolved';
  static REJECTED = 'rejected';

  constructor(handler) {
    if (typeof handler !== 'function') throw new TypeError('Promise resolver undefined is not a function');

    this.resolvedQueues = [];
    this.rejectedQueues = [];
    this.finallyQueues = [];

    this.status = KPromise.PENDING;
    this.value;


  }

  _resolve(val) {
    window.addEventListener('message', _ => {
      if (this.status !== KPromise.PENDING) return;
      this.status = KPromise.RESOLVED;
      this.value = val;

      let handler;
      while (handler = this.resolvedQueues.shift()) {
        handler(this.value);
      }

      this._finally(this.value);
    });

    window.postMessage('');
  }

  _reject(val) {
    window.addEventListener('message', _ => {
      if (this.status !== KPromise.PENDING) return;
      this.status = KPromise.REJECTED;
      this.value = val;

      let handler;
      while (handler = this.rejectedQueues.shift()) {
        handler(this.value);
      }

      this._finally(this.value);
    });

    window.postMessage('');
  }

  _finally() {
    window.addEventListener('message', _ => {
      this.status = KPromise.REJECTED;

      let handler;
      while (handler = this.finallyQueues.shift()) {
        handler(this.value);
      }
    });

    window.postMessage('');
  }

  then(resolvedHandler, rejectedHandler) {
    return new KPromise((resolve, reject) => {
      function newResolvedHandler(val) {
        if (typeof resolvedHandler === 'function') {
          let result = resolvedHandler(val);

          if (result instanceof KPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } else {
          resolve(val);
        }
      }

      function newRejectedHandler(val) {
        if (typeof rejectedHandler === 'function') {
          let result = rejectedHandler(val);

          if (result instanceof KPromise) {
            result.then(resolve, reject);
          } else {
            reject(result);
          }
        } else {
          reject(val);
        }
      }

      this.resolvedQueues.push(newResolvedHandler);
      this.rejectedQueues.push(newRejectedHandler);
    });
  }

  catch(rejectedHandler) {
    return this.then(undefined, rejectedHandler);
  }

  finally(finallyHandler) {
    this.finallyQueues.push(finallyHandler);
  }

  static resolve(val) {
    return new Promise(resolve => {
      resolve(val);
    });
  }

  static reject(val) {
    return new Promise((resolve, reject) => {
      reject(val);
    });
  }

  static all(iterator) {
    let len = iterator.length;
    let i = 0;
    let vals = [];

    return new KPromise((resolve, reject) => {
      iterator.forEach(it => {
        it.then(val => {
          i++;
          vals.push(val);
          if (i === len) {
            resolve(vals);
          }
        }).catch(e => {
          reject(e);
        });
      });
    });
  }

  static race(iterator) {
    return new KPromise((resolve, reject) => {
      iterator.forEach(it => {
        it.then(val => {
          resolve(val);
        }).catch(e => {
          reject(e);
        });
      });
    });
  }

  static allSettled(iterator) {
    let len = iterator.length;
    let i = 0;
    let vals = [];

    return new KPromise((resolve, reject) => {
      iterator.forEach(it => {
        it.finally(val => {
          i++;
          vals.push(val);
          if (i === len) {
            resolve(vals);
          }
        }).catch(e => { })
      });
    });
  }
}
