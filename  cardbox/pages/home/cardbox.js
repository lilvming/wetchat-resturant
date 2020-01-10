//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("----------------------onLoad")
  },
  onReady:function(){
    console.log("----------------------onready")
  },
  onShow:function() {
    console.log("----------------------onShow")
  },
  onHide:function () {
    console.log("----------------------onHide")
  },
  onUnload:function () {
    console.log("----------------------onUnload")
  },
  onReachBottom: function() {
    // 页面触底时执行
    console.log("-------------页面触底时执行onReachBottom")
  },
  jumpToMenu:function () {
    console.log("-----------进来了")
    wx.switchTab({
      url: "../menu/menu"
    })
  }
})
