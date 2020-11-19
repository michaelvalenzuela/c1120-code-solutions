/* exported filterOutNulls */

function filterOutNulls(values){
  let noNulls = [];

  for(let value of values){
    if(value !== null){
      noNulls.push(value);
    }
  }
  return noNulls;
}
