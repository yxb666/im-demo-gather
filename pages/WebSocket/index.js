// pages/WebSocket/index.js
// import {
//   ws
// } from "../../utils/Webscoket";
Page({
  data: {

  },
  onLoad: function (options) {
    wx.connectSocket({
      url: 'ws://192.168.1.101:8890/merchant-api/websocket?token=eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiI0MDExMTI5MjZkZTY2OTdhMGViZWNiMmRiM2IwMTI3YSIsImlhdCI6MTU5NzExNTIwNywiZXhwIjoxNTk3NzIwMDA3fQ.I-3x8RehiMfLBpiG3Wo3aCMqExyGWzlQPb-TDcPLf6wf9evcri19eBxinliyzaKMVFUMC1Lx8rNtOxAJyiysAg',
      success:(res)=>{
          console.log(res);
      }
    });
    wx.onSocketOpen((res) => {
      console.log('WebSocket 已连接')
    });
    wx.onSocketMessage(message => {
       let aaa = JSON.parse(message.data);
       console.log(aaa);
       
      //数据处理。方便界面中处理数据
      // callback(message);
    })
    wx.onSocketClose(() => {
      console.log('WebSocket 已断开');
      // _this.connect(); // 重连(没有网络的情况下不重连)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成BY_SLQNTLIe
   */
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})