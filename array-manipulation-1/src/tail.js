/* exported tail */
function tail(array){
  var newArray = [];
  if(!array){
    return newArray;
  }
  else{
    for (let i = 1; i < array.length; i++){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
