//app.js
App({
  onLaunch: function () {
    var that= this 
    var history = that.getCache("history")
    if(history == false){
      var arr = []
      arr.push("历史记录")
      that.setCache("history",arr)
    }
  },
  globalData: {
    
  },
  clearCache: function () {
    //清除缓存
    try {
      wx.clearStorageSync()
      console.log("缓存清理完毕")
    } catch (e) {}
  },
  setCache: function (key, value) {
    //设置缓存
    try {
      wx.setStorageSync(key, value)
      console.log("创建缓存:" + key + "成功")
      console.log(value)

    } catch (e) {
      console.log(e + "创建缓存失败")
    }
  },
  getCache: function (cache) {
  //获取缓存
    try {
      const value = wx.getStorageSync(cache)
      if (value) {
        console.log("读取到缓存" + cache)
        return value
      } else {
        console.log("没有读取到缓存")
        return false

      }
    } catch (e) {
      console.log(e + "读取缓存失败")
    }

  }
})