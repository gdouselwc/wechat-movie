var qqmap = require("../qqmap/qqmap-wx-jssdk")
var config = require('./config')
function getCity(cb){
  console.log("getCity>>>>>>")
  // 实例化腾讯地图API核心类
  var qqmapsdk = new qqmap({
    //key: 'MIHBZ-YOIKX-SHJ4O-7G2QL-LEEQT-B2F4G'
    key: config.txMapKey
  });
  wx.getLocation({
    type: 'wgs84',
    success: function(res) {
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: res.latitude,
          longitude: res.longitude
        },
        success: function (res) {
          var city = res.result.address_component.city
          typeof cb == 'function' && cb(city)
        },
        fail: function (res) {
          console.log("Fail")
          console.log(res);
        }
      })
    }
  })
}


module.exports = {
  getCity: getCity
}