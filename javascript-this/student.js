/* exported student */
let student = {
  firstName: "Michael",
  lastName: "Valenzuela",
  subject: "JavaScript",
  getFullName() {return this.firstName + " " + this.lastName;},
  getIntroduction() {return "Hello, my name is " + this.getFullName() + " and I am studying " + this.subject + ".";}
};
