//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    number:""
  },
  onLoad: function () {
  },
  handleKeyTap:function(e){
    console.log(e.target.id)
    var that = this
    var number = that.data.number
    that.setData({
      number:number+e.target.id
    })
  },
  handleCalculatingKeyTap:function(e){
    console.log(e.target.id)
    var that = this
    var number = parseFloat(that.data.number)
  }
})
