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
    notes:""
  },
  onLoad: function () {

  },
  handleKeyTap: function (e) {
    console.log(e.target.id)
    var that = this
    var number = that.data.number
    var notes = that.data.notes
    console.log(number)
    that.setData({
      number: number + e.target.id,
      result: number + e.target.id,
      notes:notes + e.target.id
    })
  },
  handleCalculatingKeyTap: function (e) {
    var that = this
    console.log(e.target.id)
    var number = that.data.number
    if (number != "") {
      switch (e.target.id) {
        case "+":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "+",
          })
          break;
        case "-":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "-"
          })
          break;
        case "×":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "×"
          })
          break;
        case "÷":
          that.setData({
            number1: number,
            number: "",
            CalculatingKey: "÷"
          })
          break;
        default:
          break;
      }
      that.setData({
        notes:that.data.notes+that.data.CalculatingKey
      })
    }else{
      that.setData({
        CalculatingKey:e.target.id,
        notes:number+that.data.CalculatingKey
      })
    }
    if (e.target.id == "±") {
      if (that.data.number != "") {
        var number = parseFloat(that.data.number)
        that.setData({
          number: -(number)
        })
      } else {
        var number = parseFloat(that.data.number1)
        that.setData({
          number1: -(number)
        })
      }

    }

    if (e.target.id == "=") {
      if (that.data.number != "") {
        that.setData({
          number2: that.data.number
        })
      }
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
      that.setData({
        number: "",
        result: result,
        number1: result,
        notes:""
      })
      
    }

  },
  Addition: function (number1, number2) {

    return parseFloat(number1) + parseFloat(number2)
  },
  Subtraction: function (number1, number2) {
    return parseFloat(number1) - parseFloat(number2)
  }
})