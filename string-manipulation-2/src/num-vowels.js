/* exported numVowels */
function numVowels(string){
  let count = 0;
  for(index in string){
    if (['a', 'e', 'i', 'o', 'u'].indexOf(string[index].toLowerCase()) !== -1){
      count++;
    }
  }

  return count;
}
