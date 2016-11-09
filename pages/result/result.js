//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: ''
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
