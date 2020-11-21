/* exported drop */
function drop(array, count){
  let retArray = [];

  for(let i = count; i < array.length; i++){
    retArray.push(array[i]);
  }

  return retArray;
}
