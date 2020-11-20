/* exported capitalizeWords */
function capitalizeWords(string){
  let newString = "";
  let arr = string.split(" ");
  for(value of arr){
    newString += (value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() + " ");
  }

  return newString.substr(0,newString.length-1);
}
