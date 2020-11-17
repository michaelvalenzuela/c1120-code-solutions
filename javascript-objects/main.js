/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstName: "Michael",
  lastName: "Valenzuela",
  age: 26
};

var fullName = student.firstName + " " + student.lastName;
console.log("fullName:",fullName);

student.livesInIrvine = false;

student.previousOccupation = "dev";

console.log("livesInIrvine:", student.livesInIrvine);
console.log("previous occupation:", student.previousOccupation);
console.log("Student: ", student);

var vehicle = {
  make: "bmw",
  model: "z3",
  year: 1997
};

vehicle["color"] = "blue";
vehicle["isConvertable"] = true;

console.log("vehicle['color']:",vehicle["color"]);
console.log("vehicle['isConvertable']:", vehicle["isConvertable"]);
console.log("vehicle:",vehicle);

var pet = {
  name: "Whisper",
  type: "Husky"
}

delete pet.name;
delete pet.type;
console.log("pet:",pet);
