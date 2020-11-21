/* exported omit */
function omit(source, keys){
  let retObj = {...source};

  for(value of keys){
    delete retObj[value];
  }
  return retObj;
}
