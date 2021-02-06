// pages/code/code.js
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
  },

  Focus(e) {
    var that = this;
    //console.log(e.detail.value);
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

  formSubmit(e) {

  },

  getin(){
  
    if(this.data.Value == 123456){
      wx.redirectTo({
        url: '/pages/build/build',
      })
    }else{
      wx.showToast({
        title: "密码错误",
        icon: 'none',
        duration: 2000
      });
    }
  }
})

