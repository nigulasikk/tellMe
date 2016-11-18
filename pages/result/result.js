//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  follow: function () {
    wx.showToast({
      title: '功能努力开发中...',
      icon: 'success',
      duration: 2000
    })
  },
  answer: function () {
    wx.showToast({
      title: '功能努力开发中...',
      icon: 'success',
      duration: 2000
    })
  },
  data: {
    name: '',
    array: [
      {id:0,nickName:'自行车被偷了',modifyTime:'2016-11-18', zan: 20, message: '这是那天在钱塘江边上你问我的一个问题，后来我回想了下，其实不全是那天所说的万金油的回答“漂亮”什么的。我脑子里出现的其实是两个画面，一个是那天你在我面前唱《一路向北》的样子，侧面依旧很美。还有个画面是那天送你们回去时候，你在后座照顾卤蛋，我通过后视镜看到你的样子，觉得会照顾别人的女生让人感觉很舒服。', title: 'Ta在你心中是怎么样的一个形象？'},
      {id:1,nickName:'🚲被偷了',modifyTime:'2016-11-18', zan: 11, message: '你转身向北，侧脸还是很美，我用眼光去追....', title: '她在你睡着的时候偷拍过你，你偷拍过Ta吗？'},
      {id:2,nickName:'自行车被偷了',modifyTime:'2016-11-18', zan: 4, message: '有，这是一个故事，瓜子，板凳先准备好。那次去香港旅游，一个朋友（她，他男朋友，我都是高中同学）托我带一瓶化妆水，一支口红还有她男朋友的两条ck内裤。去SaSa帮她买化妆水挺顺利，有货，内裤也有货，可口红💄那边没货，然后我就微信她说没货，那她说：“也无所谓。”后来一次逛街，我就路过了那个口红的专卖店，进去一问，这边这个有货，然后我就懒得问直接买下来了。买下来后我微信她（并没有告诉她我已经买下来了）：“那口红还要不要的。”她说：“不要了了。”虽然她不要了了，但我心里一点都不着急，因为我心里其实是有一个想送的人的的，嘻嘻嘻😀，就是你！后来一直不敢送，怕你不收，一直在思考送的时机，觉得现在表白这个时机还是不错哒，(*^__^*) 嘻嘻……', title: '有没有想要送Ta的东西？'},
       {id:3,nickName:'自行车被偷了',modifyTime:'2016-11-18', zan: 4, message: '欠你一个表白💖。况且写个小程序对于程序GG来说可能是最擅长的事情了，嘻嘻️~~~', title: '为什么要做这么一个小程序？'}
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.getStorage({
        key: 'name',
        success: function(res) {
            console.log(res.data)
            that.setData({
                name: res.data
            })
        } 
    })
  }
})
