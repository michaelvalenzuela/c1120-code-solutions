/* exported reverse */
function reverse(array){
  let i = 0;
  let j = array.length-1;

  while(i < j){
    let temp = array[i];
    array[i++] = array[j];
    array[j--] = temp;
  }

  return array;
}
