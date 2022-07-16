// miniprogram/pages/index/index.js
Page({
    data: {
        // 轮播图
        imgUrls: [{
            link: '/pages/index/index',
            url: '../../img/10011.jpg'
        }, {
            link: '/pages/list/list',
            url: '../../img/10012.jpg'
        }],
        indicatorDots: true, //小点
        indicatorColor: "white", //指示点颜色
        activeColor: "coral", //当前选中的指示点颜色
        autoplay: true, //是否自动轮播
        interval: 3000, //间隔时间
        duration: 1000, //滑动时间
        // 菜单
        navList:[
            {name:'今日新品',url:'../category/index',imgUrl:'../../img/10008.png'},{name:'水果区',url:'#',imgUrl:'../../img/10008.png'},{name:'蔬菜区',url:'#',imgUrl:'../../img/10009.png'},{name:'水产区',url:'#',imgUrl:'../../img/10010.png'},{name:'肉类区',url:'#',imgUrl:'../../img/10005.png'},{name:'蛋类区',url:'#',imgUrl:'../../img/10006.png'},{name:'豆制品',url:'#',imgUrl:'../../img/10007.png'},{name:'水果区',url:'#',imgUrl:'../../img/10008.png'},{name:'蔬菜区',url:'#',imgUrl:'../../img/10009.png'},{name:'水产区',url:'#',imgUrl:'../../img/10010.png'},
        ],
        goodsList:[
            {name:'语农 散装土鸡蛋 360枚 40斤',getTime:'08月30号',money:'28.8',sold:'114514',imgUrl:'../../img/10015.jpg'},
            {name:'新鲜现摘白菜 25千克',getTime:'08月31号',money:'38',sold:'1466',imgUrl:'../../img/10016.jpg'},
            {name:'新鲜现摘白菜 25千克',getTime:'08月31号',money:'9.9',sold:'1466',imgUrl:'../../img/10013.jpg'},
        ]
    }
    
})