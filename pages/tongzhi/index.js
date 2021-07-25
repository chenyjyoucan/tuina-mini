let app = getApp();
const $api = require('../../utils/request').API;
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
// pages/tongzhi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tongzhiliebiao:[],
    xianshitianjia: false,
    content:'',
    dataid:''
  },
  tianjiatongzhi(){
    this.setData({
      xianshitianjia:!this.data.xianshitianjia
    })
  },
  workerNotificationList(){
    let _this = this
    $api.workerNotificationList({openid:app.globalData.openId}).then(res=>{
      console.log(res);
      if(res.statusCode == 200 && res.data.code == 200){
        let list =  res.data.data.list || []
        list.map(e=>{
          e.create_time = e.update_time || e.create_time
        })
        _this.setData({
          tongzhiliebiao : list
        })
      }
    })
  },
  getInputValue(e){
    console.log(e);
    this.setData({
      content:e.detail.value
    })
  },
  // bindTextAreaBlur(e){
  //   console.log(e.detail.value);
  //   if(e.detail.value && e.detail.value.trim()){
  //     this.setData({
  //       content:e.detail.value
  //     })
  //   }else{
  //     wx.showToast({
  //       title: '请写入内容',
  //       icon:"none"
  //     })
  //   }
   
  // },
  querenfasong(){
    let text = this.data.content
    let _this = this
    console.log(text)
    if(!text){
      wx.showToast({
        title: '请写入内容',
        icon:"none"
      })
      return false
    }
    $api.workerNotificationSend({
      "openid":app.globalData.openId,
      "content": text
    }).then(res=>{
      console.log(res)
      if(res.statusCode == 200 && res.data.code==200){
        this.setData({
          xianshitianjia:false
        })
        wx.showToast({
          title: '发送成功',
        })
      }else{
        wx.showToast({
          title: res.data.err || '发送失败',
          icon:'none'
        })
      }
      _this.workerNotificationList()
    })
  },
  // xiugai(e){
  //   console.log(e);
  //   console.log(e.currentTarget.dataset.id);
  //   let id = e.currentTarget.dataset.id
  //   this.setData({
  //     dataid:id
  //   })
  //   $api.workerNotificationSend({
  //     id:this.data.dataid,
  //     "openid":app.globalData.openId,
  //     "content": text
  //   }).then(res=>{})
  // },
  shanchu(e){
    let _this = this
    let id = e.currentTarget.dataset.id
    this.setData({
      dataid:id
    })
    Dialog.confirm({
      message: '确认删除吗',
    })
      .then(() => {
       $api.workerNotificationDel({
        openid:app.globalData.openId,
        id:this.data.dataid,
          }).then(res=>{
            console.log(res);
            if(res.data && res.data.code == 200){
              //说明删除成功了
              wx.showToast({
                title: '删除成功',
              })
              _this.workerNotificationList()
            }
          })
      })
      .catch(() => {
        // on cancel
      });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.workerNotificationList()
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