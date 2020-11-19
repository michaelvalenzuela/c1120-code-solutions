/* exported includesSeven */

function includesSeven(array){

  for(let value of array){
    if(value === 7){
      return true;
    }
  }

  return false;
}
