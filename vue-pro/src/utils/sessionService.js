class SessionService {
  storage = null
  constructor() {
    if (!window.sessionStorage) {
      this.storage = {}
      throw new Error('Current browser does not support Local Storage')
    } else {
      this.storage = window.sessionStorage
    }
  }

  /**
   * @description 设置sessionStorage
   * @param {String} key
   * @param {Any} value
   */
  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  /**
   * @description 获取sessionStorage
   * @param {String} key
   * @returns {Any}
   */
  get(key) {
    return this.storage.getItem(key) || false
  }

  /**
   * @description 删除sessionStorage
   * @param {String} key
   */
  remove(key) {
    this.storage.removeItem(key)
  }

  /**
   * @description 清除所有sessionStorage
   */
  removeAll() {
    this.storage.clear()
  }
}

export default new SessionService()
