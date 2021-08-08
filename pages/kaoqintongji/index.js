let app = getApp();
const $api = require('../../utils/request').API;
// pages/kaoqintongji/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateList:[],
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.workerPunchList()
  },
  workerPunchList(){
    $api.workerPunchList({openid:app.globalData.openId}).then(res=>{
      console.log(res);
      let listArr = []
      if(res.data && res.data.code == 200){
        let data = res.data.data
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            let splitDate = key.split('-').slice(1).join('/')
            listArr.push({name:splitDate,...element})
          }
        }
        this.setData({
          dateList: listArr
        })
      }else{
        wx.showToast({
          title: res.data.err,
          icon: 'none'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})