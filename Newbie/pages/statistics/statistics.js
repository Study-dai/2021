// pages/statistics/statistics.js
var app = getApp();
Page({
  data: {
    names: ["陈华", "徐国华", "文海平", 
      "程洪玉", "邱淑勇", "冯阿团", "陆建伟", "陈星星", "沈栋",
      "李芳青", "陈蕾", "田甜", "朱哲", "李晓莹", "朱晓燕", 
      "唐旭", "周康栋", "卢炯", "张伟豪", "贾豪", "戴宽", "刘吉顺", "周林权",
      "查道锋", "李镇", "代召勇", "林小帅"
    ],

    statistics_date: "",
    population1:0,
    population2:0,
    population3:0,
    population4:0,
    sum:0,

    progressWidth: "",
    progressTime: 60,
    mark:true,
    
    statistics_shop_name:"",
    statistics_option_name1:"",
    statistics_option_name2:"",
    statistics_option_name3:"",
    statistics_option_name4:"",

    statistics_choose_name:0,
    statistics_choose_result:"",
    
    list:[],
    listA:[],
    listB:[],
    listC:[],
    listD:[]
    
  },

  new(){
    if(app.globalData.list0.length == 0){
      this.setData({
        sum:1
      })
    }else{
      this.setData({
        sum:app.globalData.list0.length
      })
    }

    this.setData({
      population1: app.globalData.listA0.length,
      population2: app.globalData.listB0.length,
      population3: app.globalData.listC0.length,
      population4: app.globalData.listD0.length,
      
      list:app.globalData.list0,
      listA:app.globalData.listA0,
      listB:app.globalData.listB0,
      listC:app.globalData.listC0,
      listD:app.globalData.listD0,
    });
  },

  return(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  
  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  
  onPullDownRefresh: function () {
    if(app.globalData.list0.length == 0){
      this.setData({
        sum:1
      })
    }else{
      this.setData({
        sum:app.globalData.list0.length
      })
    };

    this.setData({
      population1: app.globalData.listA0.length,
      population2: app.globalData.listB0.length,
      population3: app.globalData.listC0.length,
      population4: app.globalData.listD0.length,
      
      list:app.globalData.list0,
      listA:app.globalData.listA0,
      listB:app.globalData.listB0,
      listC:app.globalData.listC0,
      listD:app.globalData.listD0,
    });
  },
  
  onShow:function(){
    this.setData({
      statistics_shop_name:app.globalData.app_shop_name,
      statistics_option_name1:app.globalData.app_option_name1,
      statistics_option_name2:app.globalData.app_option_name2,
      statistics_option_name3:app.globalData.app_option_name3,
      statistics_option_name4:app.globalData.app_option_name4,
      
      statistics_choose_name:app.globalData.app_choose_name,
      statistics_choose_result:app.globalData.app_choose_result
    });

    var choose_name = this.data.statistics_choose_name;
    var choose_result = this.data.statistics_choose_result;
    var index = app.globalData.list0.indexOf(this.data.names[choose_name]);
    
    if(choose_result === 'A' & index <0){
      app.globalData.list0.push(this.data.names[choose_name]);
      app.globalData.listA0.push(this.data.names[choose_name]);

    }if(choose_result === 'B' & index <0){
      app.globalData.list0.push(this.data.names[choose_name]);
      app.globalData.listB0.push(this.data.names[choose_name]);
     
    }if(choose_result === 'C' & index <0){
      app.globalData.list0.push(this.data.names[choose_name]);
      app.globalData.listC0.push(this.data.names[choose_name]);
     
    }if(choose_result === 'D' & index <0){
      app.globalData.list0.push(this.data.names[choose_name]);
      app.globalData.listD0.push(this.data.names[choose_name]);
      
    };
    console.log(choose_name, choose_result, index, this.data.list, this.data.listA, this.data.listB, this.data.listC, this.data.listD)

    if(app.globalData.list0.length == 0){
      this.setData({
        sum:1
      })
    }else{
      this.setData({
        sum:app.globalData.list0.length
      })
    }

    this.setData({
      statistics_date:app.globalData.app_date,
      population1: app.globalData.listA0.length,
      population2: app.globalData.listB0.length,
      population3: app.globalData.listC0.length,
      population4: app.globalData.listD0.length,
      
      list:app.globalData.list0,
      listA:app.globalData.listA0,
      listB:app.globalData.listB0,
      listC:app.globalData.listC0,
      listD:app.globalData.listD0,
    });
    console.log(this.data.sum)
  }
});