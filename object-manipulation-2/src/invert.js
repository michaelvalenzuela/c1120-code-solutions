/* exported invert */
function invert(source){
  let retObj = {};

  for(value in source){
    retObj[source[value]] = value;
  }
  return retObj;
}
