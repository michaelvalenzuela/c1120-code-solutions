/* exported dropRight */
function dropRight(array, count){
  let retArray = [];
  let endingIndex = array.length - count < 0 ? 0 : array.length - count;

  for(let i = 0; i < endingIndex; i++){
    retArray.push(array[i]);
  }

  return retArray;
}
