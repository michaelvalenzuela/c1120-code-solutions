/* exported takeRight */
function takeRight(array, count){
  let retArray = [];
  let beginIndex = array.length - count < 0 ? array.length : array.length - count;

  for (let i = beginIndex; i < array.length; i++) {
    retArray.push(array[i]);
  }

  return retArray;
}
