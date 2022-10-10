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
    const { page, pageSize, isLoading, total } = this.data

    // 数据加载完成
    if (page * pageSize >= total) {
      wx.showToast({
        title: '没有更多数据啦 ～',
        icon: 'none',
      })
      return
    }

    if (isLoading) return 
    this.setData({ page: page + 1 })
    this.getShopList()
  },
  onPullDownRefresh() {
    console.log('refresh')
    this.setData({ page: 1, pageSize: 10, shopList: [], total: 0 })
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * @description 获取商户列表
   */
  getShopList(callback) {
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
        callback && callback()
      },
    })
  },
})
