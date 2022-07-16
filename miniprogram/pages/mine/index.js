// miniprogram/pages/mine/index.js
Page({
    data: {
        phonenum: '123****8912',
        mark: '3598',
        visit: '2.8',
        praise: '17.2'
    },

    shop(e) {
        console.log(e)
        wx.switchTab({
          url: '../../pages/index/index',
        })
    }
})