
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    showDialog: false
  },
  

  // Dialog.confirm({
  //   title: '标题',
  //   message: '弹窗内容',
  // })
  //   .then(() => {
  //     // on confirm
  //   })
  //   .catch(() => {
  //     // on cancel
  //   });
  getUserInfo(event) {
    console.log(event.detail);
  },

  
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        this.setData({
          showDialog:true
        })
        // Dialog.confirm({
        //   message: '确定删除吗？',
        // }).then(() => {
        //   instance.close();
        // });
        break;
    }
  },
  onChange(){},
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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