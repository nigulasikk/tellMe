//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
    data: {
        array: ['Ta在你心中是怎么样的一个形象？', 'Ta有做过令你哭笑不得的事情吗？', '自定义话题'],
        index: 0
    },
    changeQ: function () {
         console.log('changeQ')
         this.setData({
            index:  (this.data.index === (this.data.array.length-1) ? 0 : ++this.data.index)
        })
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        var intValue = parseInt(e.detail.value)
        this.setData({
            index: intValue
        })
    },
    onLoad: function() {
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
