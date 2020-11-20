/* exported getKeys */
function getKeys(object){
  let retArray = [];

  for(key in object){
    retArray.push(key);
  }

  return retArray;
}
