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
   * @description 设置 sessionStorage
   * @param {String} key
   * @param {Any} value
   */
  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  /**
   * @description 获取 sessionStorage
   * @param {String} key
   * @returns {Any}
   */
  get(key) {
    let ret = {}
    try {
      const value = this.storage.getItem(key)
      value && (ret = JSON.parse(value))
    } catch (err) {
      console.error('读取 sessionStorage 出错：', err)
    }
    return ret
  }

  /**
   * @description 删除 sessionStorage
   * @param {String} key
   */
  remove(key) {
    this.storage.removeItem(key)
  }

  /**
   * @description 清除所有 sessionStorage
   */
  removeAll() {
    this.storage.clear()
  }
}

export default new SessionService()
