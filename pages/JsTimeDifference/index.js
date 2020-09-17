// pages/JsTimeDifference/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    getItem:'',
    setInter:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCountDown();
    this.getTime(1610330364000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getCountDown() {
    let timestamp4 = new Date(1610330364000); //直接用 new Date(时间戳) 格式转化获得当前时间
    let date1 = timestamp4.toLocaleDateString().replace(/\//g, "/") + " " + timestamp4.toTimeString().substr(0, 8); //开始时间

  },
  getTime(endTime) {
    let _this = this;
        let count= 0;
        let s1 = new Date().getTime();
        _this.data.setInter = setInterval(()=>{
          count += 1;
        let s2 = endTime;//毫秒为单位
        let total = ((s2 - s1) / 1000 - count).toFixed(0);//每执行一次，减少时间差-1
        if (total >=0) {
          let day = parseInt(total / (24 * 60 * 60)); //计算整数天数
        let afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
        let hour = parseInt(afterDay / (60 * 60)); //计算整数小时数
        let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
        let min = parseInt(afterHour / 60); //计算整数分
        let afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;
        _this.setData({
          getItem:day + ' 天 ' + hour + ' 时 ' + min + ' 分 ' + afterMin + ' 秒'
        })
        }else{
          _this.endSetInter();
        }
        }, 1000);
  },
  endSetInter(){
    let _this = this;
    //清除计时器  即清除setInter
    clearInterval(_this.data.setInter)
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