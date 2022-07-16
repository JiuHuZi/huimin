// pages/detail/index.js
Page({
  data: {
      // 轮播图
      imgUrls: [{
          url: '../../img/10026.jpg'
      }, {
          url: '../../img/10045.jpg'
      }],
      indicatorDots: true, //小点
      indicatorColor: "white", //指示点颜色
      activeColor: "coral", //当前选中的指示点颜色
      autoplay: true, //是否自动轮播
      interval: 3000, //间隔时间
      duration: 1000, //滑动时间,
      // 详情图
      detailImgList:[
          '../../img/10027.jpg',
          '../../img/10028.jpg',
          '../../img/10029.jpg',
          '../../img/10030.jpg'
      ]
  },

})