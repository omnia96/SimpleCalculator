//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: 0,
    number: "",
    number1: Number,
    number2: Number,
    CalculatingKey: "",
    CalculatingKeyShow: "",
    notes:"",
    decimalPoint:true
  },
  onLoad: function () {

  },
  handleKeyTap: function (e) {
    console.log(e.target.id)
    var that = this
    var number = that.data.number
    console.log(number)
    that.setData({
      number: number + e.target.id,
      result: number + e.target.id
    })
  },
  handleCalculatingKeyTap: function (e) {
    var that = this
    console.log(e.target.id)
    var number = that.data.number
    if (number != "") {
      switch (e.target.id) {
        case "·":
        var decimalPoint = that.data.decimalPoint
          if(decimalPoint == true){
            var number = that.data.number
            that.setData({
              number:number + ".",
              result:number + ".",
              decimalPoint:false
            })
          }
          
          break;
        case "+":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "+",
            decimalPoint:true
          })
          var number1 = that.data.number1
          that.setData({
            notes:number1,
            CalculatingKeyShow:e.target.id
          })
          break;
        case "-":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "-",
            decimalPoint:true
          })
          var number1 = that.data.number1
          that.setData({
            notes:number1,
            CalculatingKeyShow:e.target.id
          })
          break;
        case "×":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "×",
            decimalPoint:true
          })
          var number1 = that.data.number1
          that.setData({
            notes:number1,
            CalculatingKeyShow:e.target.id
          })
          break;
        case "÷":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "÷",
            decimalPoint:true
          })
          var number1 = that.data.number1
          that.setData({
            notes:number1,
            CalculatingKeyShow:e.target.id
          })
          break;
          case "±":
            var number = parseFloat(that.data.number)
            that.setData({
              number: -(number),
              result:-(number)
            })
          break;
          case "=":
          that.setData({
            number2: that.data.number,
            decimalPoint:true
          })
          var result = 0;
      switch (that.data.CalculatingKey) {
        case "+":
          result = that.Addition(that.data.number1, that.data.number2)
          break;
        case "-":
          result = that.Subtraction(that.data.number1, that.data.number2)
          break;
        case "×":
          result = parseFloat(that.data.number1) * parseFloat(that.data.number2)
          break;
        case "÷":
          result = parseFloat(that.data.number1) / parseFloat(that.data.number2)
          break;


        default:
          break;
      }
      var cache = app.getCache("history")
      var history = []
    if(cache != false){
      
      history = cache
      history.push(that.data.number1 + that.data.CalculatingKey + that.data.number2 + "=" + result)
      app.setCache("history",history)
    }else{
      history.push(that.data.number1 + that.data.CalculatingKey + that.data.number2 + "=" + result)
      app.setCache("history",history)
    }
      that.setData({
        number: "",
        result: result,
        number1: result,
        notes:"",
        CalculatingKeyShow:""
      })
      
      
        break;
        default:
          break;
      }
    }else{
      switch (e.target.id) {
        case "±":
          
          break;
          case "·":
          break;
        case "=":
        var result = 0;
        switch (that.data.CalculatingKey) {
          case "+":
            result = that.Addition(that.data.number1, that.data.number2)
            break;
          case "-":
            result = that.Subtraction(that.data.number1, that.data.number2)
            break;
          case "×":
            result = parseFloat(that.data.number1) * parseFloat(that.data.number2)
            break;
          case "÷":
            result = parseFloat(that.data.number1) / parseFloat(that.data.number2)
            break;
  
  
          default:
            break;
        }
        var cache = app.getCache("history")
        var history = []
      if(cache != false){
        
        history = cache
        history.push(that.data.number1 + that.data.CalculatingKey + that.data.number2 + "=" + result)
        app.setCache("history",history)
      }else{
        history.push(that.data.number1 + that.data.CalculatingKey + that.data.number2 + "=" + result)
        app.setCache("history",history)
      }
        that.setData({
          number: "",
          result: result,
          number1: result,
          notes:"",
          CalculatingKeyShow:""
        })
        
        break;
        default:
        that.setData({
              CalculatingKeyShow:e.target.id,
              CalculatingKey:e.target.id
            })
          break;
      }
    }
  },
  Addition: function (number1, number2) {

    return parseFloat(number1) + parseFloat(number2)
  },
  Subtraction: function (number1, number2) {
    return parseFloat(number1) - parseFloat(number2)
  },
  backSpace:function(string) {
    string = string.substr(0,length-1)
    return string
  }
})