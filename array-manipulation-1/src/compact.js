/* exported compact */
function compact(array){
  var retArray = [];

  for(let value of array){
    if(!!value){
      retArray.push(value);
    }
  }
  return retArray;
}
