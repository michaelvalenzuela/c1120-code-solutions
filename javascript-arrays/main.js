/* eslint-disable no-console, no-unused-vars, dot-notation */

var colors = ["red", "white", "blue"]

console.log("colors[0]:", colors[0]);
console.log("colors[1]:", colors[1]);
console.log("colors[2]:", colors[2]);

var america = "America is " + colors[0] + ", " + colors[1] + ", " + colors[2] + ".";
console.log("America colors concatenation:", america);


colors[2] = "green";

var mexico = "Mexico is " + colors[0] + ", " + colors[1] + ", " + colors[2] + ".";
console.log("Mexico colors concatenation:", mexico);
console.log("Colors:",colors);


var students = ["Michael", "Camille", "Emily", "CJ"];
var numberOfStudents = students.length;
console.log("Length of students:", numberOfStudents);

var lastIndex = numberOfStudents-1;
var lastStudent = students[lastIndex];

console.log("Last Student:", lastStudent);

console.log("Students:",students);
