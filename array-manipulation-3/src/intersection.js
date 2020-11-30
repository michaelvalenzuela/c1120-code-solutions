/* exported intersection */
function intersection(first, second){
  return first.filter(x => second.includes(x));
}
