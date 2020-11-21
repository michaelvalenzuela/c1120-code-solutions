/* exported defaults */

function defaults(target, source){
  for(value in source){
    if(target[value] === undefined){
      target[value] = source[value];
    }
  }
}
