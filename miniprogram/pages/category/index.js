// pages/category/index.js
Page({
  data: {
    goods: [],
    currentIndex: 0,
    categories: null,
  },
  changeItem(e) {
    const currentIndex = Number(e.currentTarget.dataset.index)
    this.setData({
      currentIndex,
      goods: this.data.categories[currentIndex].goods
    })
  },
  async onLoad() {
    wx.showLoading({
      title: '拼命加载中',
      mask: true,
    })
    const res = await wx.cloud.callFunction({
      name: 'gc_categories',
    })
    const categories = res.result
    this.setData({
      categories,
      goods: categories[this.data.currentIndex].goods
    })
    wx.hideLoading()
  }
})