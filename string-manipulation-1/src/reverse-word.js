/* exported reverseWord */
function reverseWord(word){
  var newWord = "";
  for(let i = word.length-1; i >= 0; i--){
    newWord += word[i];
  }
  return newWord;
}
