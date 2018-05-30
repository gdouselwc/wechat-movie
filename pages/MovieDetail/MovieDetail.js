var config = require("../../utils/config")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviedetail : null
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.getMovieDetail(options.id)
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
  
  },

  getMovieDetail: function(movidId){
    var that = this
    console.log(movidId)
    var url = config.apiList.MovieDetail + "?movieId=" + movidId
    wx.request({
      url: url,
      success : function(res){
        console.log(res.data)
        that.setData({
          moviedetail : res.data
        })
      },
      fail : function (res){
        console.log(res)
      }
    })
  }
})