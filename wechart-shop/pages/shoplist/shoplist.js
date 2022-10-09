Page({
  data: {
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false,
  },
  onLoad(options) {
    this.setData({ query: options })
    this.getShopList()
  },
  onReady() {
    wx.setNavigationBarTitle({ title: this.data.query.title })
  },
  onReachBottom() {
    if (this.data.isLoading) return
    this.setData({ page: this.data.page + 1 })
    this.getShopList()
  },

  /**
   * @description 获取商户列表
   */
  getShopList() {
    this.setData({ isLoading: true })
    wx.showLoading({ title: '数据加载中...' })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize,
      },
      success: res => {
        this.setData({ shopList: [...this.data.shopList, ...res.data], total: res.header['X-Total-Count'] - 0 })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({ isLoading: false })
      },
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},
})
