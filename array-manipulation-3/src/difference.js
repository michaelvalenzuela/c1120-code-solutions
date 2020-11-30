/* exported difference */

function difference(first, second){
  let ret = first.filter(ele => !second.includes(ele)).concat(second.filter(ele => !first.includes(ele)));
  return ret;
}
