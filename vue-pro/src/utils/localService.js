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
   * @description 设置localStorage
   * @param {String} key
   * @param {Any} value
   */
  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  /**
   * @description 获取localStorage
   * @param {String} key
   * @returns {Any}
   */
  get(key) {
    return this.storage.getItem(key) || false
  }

  /**
   * @description 删除localStorage
   * @param {String} key
   */
  remove(key) {
    this.storage.removeItem(key)
  }

  /**
   * @description 清除所有localStorage
   */
  removeAll() {
    this.storage.clear()
  }
}

export default new LocalService()
