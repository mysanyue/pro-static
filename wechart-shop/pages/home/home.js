Page({
  data: {
    swiperList: [],
    gridList: [],
  },
  onLoad() {
    this.getSwiperList()
    this.getGridList()
  },

  /**
   * @description 获取轮播图数据
   */
  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: 'GET',
      success: res => {
        this.setData({ swiperList: res.data })
      },
    })
  },
  getGridList() {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: res => {
        this.setData({ gridList: res.data })
      },
    })
  },
})
