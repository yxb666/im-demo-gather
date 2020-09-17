var webScoket = {
  init: function () {
    this.open(); // 打开连接
    this.close(); // 监听连接是否关闭
    this.error(); //监听连接错误
    this.recvData(); //接收数据
    this.connect(); //连接      
  },
  open: function () {
    //打开连接
    var _this = this;
    wx.onSocketOpen(() => {
      console.log('WebSocket 已连接')

    });
  },
  close: function () {
    // 关闭连接
    var _this = this;
    wx.onSocketClose(() => {
      console.log('WebSocket 已断开');
      _this.connect(); // 重连(没有网络的情况下不重连)
    })
  },
  error: function () {
    //连接错误
    wx.onSocketError(error => {
      console.error('socket error:', error);
      _this.connect(); // 重连(没有网络的情况下不重连)
    })
  },
  recvData: function (callback) {
    //接收数据
    wx.onSocketMessage(message => {
      // console.log('socket message:', message)
      //数据处理。方便界面中处理数据
      callback(message);
    })
  },
  connect: function () {
    wx.connectSocket({
      url: 'wss://192.168.3.48:8890/merchant-api/websocket?token=eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiIxOTI5ODNjNTgzZTQ0Y2NhM2VmMzlhZDdhZjE5YzU3NSIsImlhdCI6MTU5NjUxMDkyMSwiZXhwIjoxNTk3MTE1NzIxfQ.CZi4yfhu5RHpumbdJaPor_lirJrsQz08K9MHhVEJRPTPOdIWszJPddpvWcyYA9gGWAqEzTEsD2_DiB8Ec5n38w'
    });
  },
  send: function (msg) {
    // 发送指令
    wx.sendSocketMessage({
      data: msg,
      success: function (ret) {
        console.log('发送', ret)

      },
      fail: function (ret) {
        console.log(ret)
      }
    });
  }
}

webScoket.init();

module.exports = {
  ws: webScoket
}