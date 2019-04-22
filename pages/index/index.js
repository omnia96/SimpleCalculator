//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    number:"",
    number_1:Number
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
    var that = this
    console.log(e.target.id)
    if(e.target.id == "+"){
      var number = parseFloat(that.data.number)
      that.setData({
        number_1:number,
        number:""
      })
    }
    if(e.target.id == "="){
      var result = that.Addition(that.data.number_1,parseFloat(that.data.number))
      that.setData({
        number:result
      })
    }
    
  },
  Addition:function(number1,number2) {
    return number1+number2
  }
})
