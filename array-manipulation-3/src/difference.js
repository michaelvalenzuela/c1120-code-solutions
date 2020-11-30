/* exported difference */

function difference(first, second){
  let retArray = first.filter(ele => !second.includes(ele)).concat(second.filter(ele => !first.includes(ele)));
  return retArray;
}
