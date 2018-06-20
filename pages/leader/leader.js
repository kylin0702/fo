//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    authors: [],
    id: ''
  },
  onShow: function() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 500);
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b2a1342eb837e1c8f54b5c4/getArticInfo',
      success: function (res) {
        console.log(res.data.data.index);
        console.log(res.data.data.articleInfo);
        
        that.setData({
          authors: res.data.data.index,
          id: res.data.data.articleInfo
        })
      }
    })
  },
 /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
      },
       /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },

})
