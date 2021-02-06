// pages/order/order.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    names: ["陈华", "徐国华", "文海平", 
      "程洪玉", "邱淑勇", "冯阿团", "陆建伟", "陈星星", "沈栋",
      "李芳青", "陈蕾", "田甜", "朱哲", "李晓莹", "朱晓燕", 
      "唐旭", "周康栋", "卢炯", "张伟豪", "贾豪", "戴宽", "刘吉顺", "周林权",
      "查道锋", "李镇", "代召勇", "林小帅"
    ],
    nameIndex: 0,

    choose_list:['A', 'B', 'C', 'D'],
    total_list:[],

    order_date: "2021-01-01",

    order_shop_name:"",
    order_option_name1:"",
    order_option_name2:"",
    order_option_name3:"",
    order_option_name4:"",
    
    order_imagelist1:["/images/预览.png"],
    order_imagelist2:["/images/预览.png"],
    order_imagelist3:["/images/预览.png"],
    order_imagelist4:["/images/预览.png"],
  },

  bindNameChange: function(e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value)
    this.setData({
      nameIndex: e.detail.value
    })
  },

  reg: function(e) {
    var name_code = this.data.nameIndex;
    var choose_what = e.detail.value.choose_result;
    
    var index1 = app.globalData.list0.indexOf(this.data.names[name_code]);
    var index2 = this.data.choose_list.indexOf(choose_what);

    if(index1 < 0 & index2 < 0){
      wx.showToast({
        title: "请点餐",
        icon: 'none',
        duration: 3000
      });
    }if(index1 >= 0 & index2 < 0){
      wx.showToast({
        title: "名字重复",
        icon: "none",
        duration: 3000
      });
    }if(index1 >= 0 & index2 >= 0){
      wx.showToast({
        title: "请勿重复点餐",
        icon: "none",
        duration: 3000
      });
    }if(index1 < 0 & index2 < 0){
      wx.showToast({
        title: "请点餐",
        icon: "none",
        duration: 3000
      });
    }if(index1 < 0 & index2 >=0){
      app.globalData.app_choose_name = this.data.nameIndex;
      app.globalData.app_choose_result = e.detail.value.choose_result;
      console.log(this.data.nameIndex, e.detail.value.choose_result);
      wx.showToast({
        title: "提交成功",
        icon: "success",
        duration: 2000
      });

      wx.navigateTo({
        url: '/pages/statistics/statistics',
      })

    }
   
    this.setData({
      order_choose_result:e.detail.value.choose_result
    })

    
  },

  to_statistics(){

    wx.navigateTo({
      url: '/pages/statistics/statistics',
    })

  },

  radioChange(e) {

  },

  onShow:function(){
    this.setData({
      order_shop_name:app.globalData.app_shop_name,
      order_date:app.globalData.app_date,
      order_option_name1:app.globalData.app_option_name1,
      order_option_name2:app.globalData.app_option_name2,
      order_option_name3:app.globalData.app_option_name3,
      order_option_name4:app.globalData.app_option_name4,

      order_imagelist1:app.globalData.app_imagelist1,
      order_imagelist2:app.globalData.app_imagelist2,
      order_imagelist3:app.globalData.app_imagelist3,
      order_imagelist4:app.globalData.app_imagelist4
    })
  }
})