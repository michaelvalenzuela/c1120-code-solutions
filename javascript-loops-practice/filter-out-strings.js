/* exported filterOutStrings */

function filterOutStrings(values){
  let noStrings = [];

  for(let value of values){
    if(typeof value !== "string"){
      noStrings.push(value);
    }
  }

  return noStrings;
}
