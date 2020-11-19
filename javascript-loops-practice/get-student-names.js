/* exported getStudentNames */

function getStudentNames(students){
  let names = [];

  for(let student of students){
    names.push(student.name);
  }

  return names;
}
