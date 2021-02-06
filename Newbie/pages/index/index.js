// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  click_order: function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },

  click_build: function(){
    wx.navigateTo({
      url: '/pages/code/code',
    })
  },

  click_statistics: function(){
    wx.redirectTo({
      url:'/pages/statistics/statistics',
    })
  },

  click_reset(){
    wx.navigateTo({
      url:'/pages/code2/code2'
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
  
})