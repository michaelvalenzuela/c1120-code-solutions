/* exported zip */
function zip(first, second){
  let length = first.length < second.length ? first.length : second.length;
  let retArray = [];

  for(let i = 0; i < length; i++){
    let tempArray = [];
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    retArray.push(tempArray);
  }

  return retArray;
}
