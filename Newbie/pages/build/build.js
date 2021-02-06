// pages/build/build.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    build_date: "2021-02-01",
    build_imagelist1:["/images/图片上传.png"],
    build_imagelist2:["/images/图片上传.png"],
    build_imagelist3:["/images/图片上传.png"],
    build_imagelist4:["/images/图片上传.png"],

    build_shop_name:"",
    build_option_name1:"",
    build_option_name2:"",
    build_option_name3:"",
    build_option_name4:"",
    
    option1:"",
    option2:"",
    option3:"",
    option4:""
  },
  
  bindtxt:function(e){
    app.globalData.app_shop_name = e.detail.value;
  },
  
  bindDateChange: function (e) {
    console.log(e);
    app.globalData.app_date = e.detail.value;
    this.setData({
      build_date: e.detail.value,
      [`formData.build_date`]: e.detail.value
    })
  },

  bindtxt1:function(e){
    app.globalData.app_option_name1 = e.detail.value;
  },

  bindtxt2:function(e){
    app.globalData.app_option_name2 = e.detail.value;
  },

  bindtxt3:function(e){
    app.globalData.app_option_name3 = e.detail.value;
  },

  bindtxt4:function(e){
    app.globalData.app_option_name4 = e.detail.value;
  },

  uploadimage1:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType:['original', 'compressed'],
      sourceType:['album', 'camera'],
      success:function(res){
        that.setData({
          build_imagelist1:res.tempFilePaths
        });
        app.globalData.app_imagelist1 = res.tempFilePaths;
      }
    });

  },

  uploadimage2:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType:['original', 'compressed'],
      sourceType:['album', 'camera'],
      success:function(res){
        that.setData({
          build_imagelist2:res.tempFilePaths
        });
        app.globalData.app_imagelist2 = res.tempFilePaths;
      }
    });
  },

  uploadimage3:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType:['original', 'compressed'],
      sourceType:['album', 'camera'],
      success:function(res){
        that.setData({
          build_imagelist3:res.tempFilePaths
        });
        app.globalData.app_imagelist3 = res.tempFilePaths;
      }
    });
  },

  uploadimage4:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType:['original', 'compressed'],
      sourceType:['album', 'camera'],
      success:function(res){
        that.setData({
          build_imagelist4:res.tempFilePaths
        });
        app.globalData.app_imagelist4 = res.tempFilePaths;
      }
    });
  },

  allsubmit:function(e){
    console.log(e);
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },

  return(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  allreset:function(e){
    console.log(e);
    var that = this;
    that.setData({
      build_imagelist1:["/images/图片上传.png"],
      build_imagelist2:["/images/图片上传.png"],
      build_imagelist3:["/images/图片上传.png"],
      build_imagelist4:["/images/图片上传.png"]
    });
  },

  onShow:function(){
    this.setData({
      build_shop_name:app.globalData.app_shop_name,
    })
  }
})