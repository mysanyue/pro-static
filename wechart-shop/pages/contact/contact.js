Page({
  data: {
    colorList: [],
  },
  onLoad() {
    this.getColors()
  },
  onReachBottom() {
    this.getColors()
  },

  /**
   * @description 随机获取颜色
   */
  getColors() {
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success: ({ data: res }) => {
        this.setData({ colorList: [...this.data.colorList, ...res.data] })
      },
    })
  },
})
