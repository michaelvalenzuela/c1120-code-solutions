/* exported equal */
function equal(first, second){
  if(first.length !== second.length){
    return false;
  }

  let i = 0;

  while(i < first.length){
    if(first[i] !== second[i]){
      return false;
    }
    i++;
  }

  return true;
}
