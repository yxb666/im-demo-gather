// pages/UploadPhoto/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  fileListevt(){
    let _this = this, pics = this.data.pics;
    console.log(pics);
    if (pics.length <= 3) {
      wx.chooseImage({
        count: 4, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          // wx.showToast({
          //   title: '正在上传...',
          //   icon: 'loading',
          //   mask: true,
          //   duration: 10000
          // });
          for (var i = 0; i < tempFilePaths.length;i++){
            pics.push(tempFilePaths[i]);
          }
          console.log(pics);
          _this.setData({
            pics: pics
          })
        },
      });
    } else {
      wx.showToast({
        title: '最多上传4张图片',
        icon: 'none',
        duration: 3000
      });

    }
  },
  deleteImg(e){
    let that = this;
    let pics = this.data.pics;
    let index = e.currentTarget.dataset.index;
    pics.splice(index, 1);
    console.log(pics)
    this.setData({
      pics: pics,
    })
  },
   // 预览图片
   previewImg1: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var pics = this.data.pics;
    wx.previewImage({
      //当前显示图片
      current: pics[index],
      //所有图片
      urls: pics
    })
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