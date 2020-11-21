/* exported includes */
function includes(array, value){
  for(ele of array){
    if(ele === value){
      return true;
    }
  }
  return false;
}
