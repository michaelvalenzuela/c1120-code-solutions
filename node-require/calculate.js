const add = require("./add");
const subtract = require("./subtract");
const multiple = require("./multiply");
const divide = require("./divide");

let num1 = parseInt(process.argv[2]);
let func = process.argv[3].toLowerCase();
let num2 = parseInt(process.argv[4]);

switch(func){
  case "plus":
    console.log("result:",add.add(num1, num2));
    break;
  case "minus":
    console.log("result:", subtract.subtract(num1, num2));
    break;
  case "times":
    console.log("result:", multiple.multiply(num1, num2));
    break;
  case "over":
    console.log("result:", divide.divide(num1, num2));
    break;
}


//plus
//10 minus 4
//times
//9 over 3
