/* exported take */
function take(array, count){
  let retArray = [];

  for(let i = 0; i < array.length-1; i++){
    retArray.push(array[i]);
    count--;
    if(count === 0){
      return retArray;
    }
  }
  return retArray;
}
