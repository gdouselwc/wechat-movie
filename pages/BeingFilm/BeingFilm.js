// pages/BeingFilm/BeingFilm.js
var common = require("../../utils/Common")
var config = require("../../utils/config")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperURL:[],
    films : [],
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad>>>>")
    wx.showNavigationBarLoading()
    common.getCity(function(city){
      console.log(city)
      wx.hideNavigationBarLoading()
      wx.setNavigationBarTitle({
        title: '正在热映 - ' + city
      })
    })
    this.onGetData()
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

  onGetData: function(){
    var that = this
    wx.login({
      success:function(res){
        if(res.code){
          wx.request({
            url: config.apiList.BeingFilms,
            method: 'GET',
            success: function (res){
              console.log(res.data)
              var tmp =[]
              for(var index in res.data){
                //console.log(res.data[index].imageurl)
                if(tmp.length < 4){
                  tmp.push(res.data[index].imageurl)
                }
              }
              that.setData({
                swiperURL:tmp,
                films:res.data,
              })
            }
          })
        }
      }
    })    
  },
  /*电影详情*/
  movieDetail: function(e) {
    console.log(e)
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/MovieDetail/MovieDetail?id='+data.id,
    })
  }
})