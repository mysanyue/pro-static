class LocalService {
  storage = null
  constructor() {
    if (!window.localStorage) {
      this.storage = {}
      throw new Error('Current browser does not support Local Storage')
    } else {
      this.storage = window.localStorage
    }
  }

  /**
   * @description 设置 localStorage
   * @param {String} key
   * @param {Any} value
   */
  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  /**
   * @description 获取 localStorage
   * @param {String} key
   * @returns {Any}
   */
  get(key) {
    let ret = {}
    try {
      const value = this.storage.getItem(key)
      value && (ret = JSON.parse(value))
    } catch (err) {
      console.error('读取 localStorage 出错：', err)
    }
    return ret
  }

  /**
   * @description 删除 localStorage
   * @param {String} key
   */
  remove(key) {
    this.storage.removeItem(key)
  }

  /**
   * @description 清除所有 localStorage
   */
  removeAll() {
    this.storage.clear()
  }
}

export default new LocalService()
