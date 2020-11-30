/* exported flatten */
function flatten(array){
  return Array.prototype.concat.apply([], array);
}
