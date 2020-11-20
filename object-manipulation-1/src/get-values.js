/* exported getValues */
function getValues(object){
  let retArray = [];
  for(key in object){
    retArray.push(object[key]);
  }
  return retArray;
}
