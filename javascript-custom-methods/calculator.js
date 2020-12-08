/* exported calculator */

var calculator = {
  add: function(x,y){
    return x + y;
  },
  subtract: function(x,y){
    return x-y;
  },
  multiply: function(x,y){
    return x*y;
  },
  divide: function(x,y){
    return x/y;
  },
  square: function(x){
    return x * x;
  },
  sumAll: function(numbers){
    let sum = 0;
    for(number of numbers){
      sum+=number;
    }
    return sum;
  },
  getAverage(numbers){
    return this.sumAll(numbers)/numbers.length;
  }

}
