/* exported countdown */

function countdown(number){
  let array = [];
  for(let i = number; i >= 0; i--){
    array.push(i);
  }
  return array;
}
