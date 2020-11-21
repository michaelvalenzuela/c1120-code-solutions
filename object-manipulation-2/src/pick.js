/* exported pick */
function pick(source, keys) {
  let retObj = {};
  for(let value of keys){
    if(source[value] !== undefined){
      retObj[value] = source[value];
    }
  }
  return retObj;
}
