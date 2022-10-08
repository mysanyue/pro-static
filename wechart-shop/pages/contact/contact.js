Page({
  data: {
    colorList: [],
    isLoading: false
  },
  onLoad() {
    this.getColors()
  },
  onReachBottom() {
    if (this.data.isLoading) return
    this.getColors()
  },

  /**
   * @description 随机获取颜色
   */
  getColors() {
    this.setData({ isLoading: true })
    wx.showLoading({ title: '数据加载中...' })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success: ({ data: res }) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data],
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({ isLoading: false })
      },
    })
  },
})
