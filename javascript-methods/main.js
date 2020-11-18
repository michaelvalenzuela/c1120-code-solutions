var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);

console.log("Maimum value:",maximumValue);

var superheroes = ["Green Lantern", "Nightwing", "Batman", "Flash"];

var randomNumber = Math.random();

randomNumber *= superheroes.length;

var randomIndex = Math.floor(randomNumber);

console.log("Random Index:",randomIndex);

var randomHero = superheroes[randomIndex];
console.log("Random Hero:", randomHero);


var library = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling"
  },
  {
    title: "Percy Jackson",
    author: "Rick Riordan"
  },
  {
    title: "To Kill A Mockingbird",
    author: "Harper Lee"
  }
];

var lastBook = library.pop();
console.log("Last Book:", lastBook);

var firstBook = library.shift();
console.log("First Book:", firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log("Library:",library);

var fullName = "Michael Valenzuela";
var firstAndLastName = fullName.split(" ");
console.log("First And Last Name:",firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log("sayMyName:",sayMyName);
