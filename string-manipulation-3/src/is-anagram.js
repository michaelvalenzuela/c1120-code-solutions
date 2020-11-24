/* exported isAnagram */
function isAnagram(firstString, secondString){
  var stringOne = firstString.replace(/\s/g, "").split("").sort().join("");
  var stringTwo = secondString.replace(/\s/g, "").split("").sort().join("");

  return stringOne === stringTwo;


}
