//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    name: '',
    array: [
      {id:0,nickName:'自行车被偷了',modifyTime:'2016-1-2', zan: 20, message: '是一个逗比', title: '你对他的第一印象是什么？'},
      {id:1,nickName:'🚲被偷了',modifyTime:'2016-1-3', zan: 11, message: '嘿嘿，嘻嘻，哈哈哈', title: '他做过什么让你感到奇葩的事情？'},
      {id:2,nickName:'自行车被偷了',modifyTime:'2016-1-4', zan: 4, message: '🍐🍊', title: '你最想对他悄悄说什么？'}
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
