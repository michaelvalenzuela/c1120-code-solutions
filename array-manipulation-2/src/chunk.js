/* exported chunk */
function chunk(array, size){
  let retArray = [];
  let subArray = [];

  for(let i = 0; i < array.length; i++){
    subArray.push(array[i]);

    if(subArray.length === size || i === array.length-1){
      retArray.push(subArray);
      subArray = [];
    }

  }
  return retArray;
}
