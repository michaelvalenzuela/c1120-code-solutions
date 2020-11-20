/* exported ransomCase */
function ransomCase(string){
  let newString = "";
  for(index in string){
    index % 2 ? newString += string[index].toUpperCase() : newString += string[index].toLowerCase();
  }
  return newString;
}
