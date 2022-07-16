// pages/order/order.js
Page({
    data: {
        tab: 0,
        item: 0,
        orderList: [{
                date: '2020-01-01',
                sta: '08月30号',
                state: '成功',
                pickdate: '4月12日',
                goodsnum: '2',
                pay: '169.00',
                goodstitle: '卤将军 麻辣鸭掌 10/袋 约280g/袋',
                imgUrl: '../../img/10015.jpg',
                goodsnum: '2',
                money: 169.00,
                buystate: '再次购买'
            },
            {
                date: '2020-01-01',
                sta: '08月30号',
                state: '成功',
                pickdate: '4月12日',
                goodsnum: '2',
                pay: '169.00',
                goodstitle: '卤将军 麻辣鸭掌 10/袋 约280g/袋',
                imgUrl: '../../img/10015.jpg',
                goodsnum: '2',
                money: 169.00,
                buystate: '再次购买'
            },
            {
                date: '2020-01-01',
                sta: '08月30号',
                state: '成功',
                pickdate: '4月12日',
                goodsnum: '2',
                pay: '169.00',
                goodstitle: '卤将军 麻辣鸭掌 10/袋 约280g/袋',
                imgUrl: '../../img/10015.jpg',
                goodsnum: '2',
                money: 169.00,
                buystate: '再次购买'
            },
            {
                date: '2020-01-01',
                sta: '08月30号',
                state: '成功',
                pickdate: '4月12日',
                goodsnum: '2',
                pay: '169.00',
                goodstitle: '卤将军 麻辣鸭掌 10/袋 约280g/袋',
                imgUrl: '../../img/10015.jpg',
                goodsnum: '2',
                money: 169.00,
                buystate: '立即付款'
            },
            {
                date: '2020-01-01',
                sta: '08月30号',
                state: '失败',
                pickdate: '4月12日',
                goodsnum: '2',
                pay: '169.00',
                goodstitle: '卤将军 麻辣鸭掌 10/袋 约280g/袋',
                imgUrl: '../../img/10015.jpg',
                goodsnum: '2',
                money: 169.00,
                buystate: '立即付款'
            },
        ]
    },
    // 顶部点击tab切换
    changeItem(e) {
        console.log(e);
        this.setData({
            item: e.currentTarget.dataset.item
        })
    },
    
    // 内容区域变更页面
    changeTab(e) {
        console.log(e)
        this.setData({
            tab: e.detail.current
        })
    },

    shop(e) {
        console.log(e)
        wx.switchTab({
            url: '../../pages/index/index',
        })
    }
})