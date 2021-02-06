// pages/code2/code2.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Length: 6,        //输入框个数
    isFocus: true,    //聚焦
    Value: "",        //输入的内容
    ispassword: false, //是否密文显示 true为密文， false为明文。
    disabled:true,
    disabled1:true,
  },

  Focus(e) {
    var that = this;
    console.log(e.detail.value);
    var inputValue = e.detail.value;
    var ilen = inputValue.length;
    if(ilen == 6){
      that.setData({
        disabled: false,
        Value: inputValue,
      })
    }else{
      that.setData({
        disabled: true,
      })
    }

    that.setData({
      Value: inputValue,
    })
  },

  Tap() {
    var that = this;
    that.setData({
      isFocus: true,
    })
  },

  sure(){
    if(this.data.Value == 123456){
      this.setData({
        disabled1: false,
      })
    }else{
      wx.showToast({
        title: "密码错误",
        icon: 'none',
        duration: 2000
      });
    }
  },

  getreset(){
    app.globalData.app_shop_name = "",
    
    app.globalData.app_date = "",
    
    app.globalData.app_option_name1 = "",
    app.globalData.app_option_name2 = "",
    app.globalData.app_option_name3 = "",
    app.globalData.app_option_name4 = "",

    app.globalData.app_imagelist1 = [""],
    app.globalData.app_imagelist2 = [""],
    app.globalData.app_imagelist3 = [""],
    app.globalData.app_imagelist4 = [""],
    app.globalData.app_choose_name = 0,
    app.globalData.app_choose_result = "",

    app.globalData.list0 = [],
    app.globalData.listA0 = [],
    app.globalData.listB0 = [],
    app.globalData.listC0 = [],
    app.globalData.listD0 = []

    wx.redirectTo({
      url: '/pages/statistics/statistics',
    })
  }
})