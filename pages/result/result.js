//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
Page({
    follow: function() {
        wx.showToast({
            title: '功能努力开发中...',
            icon: 'success',
            duration: 2000
        })
    },
    answer: function() {
        wx.navigateTo({
            url: '../add/add'
        })
    },
    data: {
        name: '',
        array: [
            { id: 0, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 30,title: '个人信息', message: '姓名：钱凯杰/男/1990 \n联系方式：15068733618\n邮箱：qiankaijie1024@gmail.com \n个人博客：www.qiankaijie.com \n工作年限：3年 \n期望职位：Web前端开发 \n期望城市：杭州未来科技城 \n在职状态：已离职\n学历：本科/计算机系 '},
            { id: 1, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 12,title: '介绍下你最近的一个公司？', message: '把微信朋友圈，微博，qq空间中的照片文字导出，排版，打印成为实体书。同时提供在线台历，相册书的制作和照片打印等横向业务。在职期间我一直是该项目的前端开发总负责人。'},
            { id: 2, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 32,title: '时光书网站', message: '网站分两部分：移动端和桌面端。移动端以微信公众账号tab为入口，桌面端以官网扫描登录为入口。时光书网站主要功能就是在我们排版完数据后提供给用户一个编辑（增删内容，选择内页，选择模板，自定义封面内容和图片）和购买其电子书的入口。\n\n所用技术：vue全家桶(webpack, vue-loader, vue-cli, vuex, vue-router, vue-resource), grunt, gulp, handlebars, requirejs, canvas, 微信js-sdk'},
            { id: 3, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 44,title: '时光书自动打印系统', message: '用户下单后，所有的订单是要通过pdf的形式交付给印刷厂的（早期我们是通过手动人工重复的去做浏览器 cmd + p 转pdf, filezella传ftp），所以该系统实现的是用户下单后所有流程程序自动化（查询到订单，把订单对应数据网页转成pdf，pdf上传到ftp服务器，通知印刷厂）。还有一个需求是如果自动化流程出问题了，可以通过手动点击的方式本地下载pdf。\n\n所用技术：angular, node.js, express, phantomjs, casperjs, shell脚本'},
            { id: 4, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 21,title: '时光书管理后台', message: '这是一个管理者用的一个总后台，里面包括用户管理，订单管理，数据统计（销售统计，代理用户管理，营销活动数据统计）微信公众平台设置等模块。\n\n所用技术：bootstrap, jquery, echart'},
            { id: 5, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 53,title: '时光书代理系统', message: '我们会在全国范围内招一些代理，通过二维码推广我们产品，他可以在代理系统里面查看自己的推广情况。\n\n所用技术：vue全家桶'},
            { id: 6, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 11,title: '高分网格系统', message: '一个国家性的课题。主要用于国家各个部门之间（国土部，农业部，林业部）卫星数据的传输。每个部门用户可以在软件上根据地图信息筛选自己所需要的数据，并进行购买，下载。\n\n所用技术：arcGIS Map JavaScript api, jQuery, volocity'},
            { id: 7, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 8,title: '内涝微图android App', message: '手头有一批从微博上爬取的与内涝有关的数据，我们希望以地图的形式展现出来。\n\n所用技能：高德地图API, JAVA Android 开发'},
            { id: 8, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 8,title: '个人博客', message: '一个写技术文章，生活感悟，分享些有意思的生活照的地方。\n\n所用技术：keystone.js(mongoDB, nodejs, express, bootstrap, jade, less, jQuery), pod(Git push deploy for Node.js)运维工具, photoshop'},
            { id: 9, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 10,title: '用css画村上隆太阳花，并且让它动起来', message: '买了一个毛绒玩具，觉得挺好看的，然后有一个想法：用css把它给画出来。\n\n所用技术：less, css3 animation, transform'},
            { id: 10, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 40,title: '微信小程序', message: '就是这个东东啦~\(≧▽≦)/~啦啦啦\n\n所用技术：WXML, JS, WXSS'},
            { id: 11, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 230,title: 'magenta', message: '这是google开源的tensorflow下一个富有情怀的人工智能项目：先是训练机器学习些画或者音乐的风格，然后它就能用学会的风格去处理图片或创作音乐。\n\n所用技术：docker, python'},
            { id: 12, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 11,title: '其他', message: '同时我还保持对WEEX，ElementUI, tensorflow的持续关注，现在对macOS下的效率神器Alfred有浓厚兴趣，并已成为其下的PowerPack用户。'},
            { id: 13, nickName: '钱凯杰', modifyTime: '2016-12-1', zan: 20,title: '自我评价', message: '在保持对技术好奇的同时，我也是一个热爱生活的人，平时喜欢看书，打篮球，种多肉，希望能加入一个比较有技术氛围又不失生活格调的公司，大家一起切磋，一起进步，一起玩。'}
        ]
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
