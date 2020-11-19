/* exported addSuffixToAll */

function addSuffixToAll(words, suffix){
  let suffixWords = [];

  for(let i = 0; i < words.length; i++){
    suffixWords.push(words[i]+suffix);
  }

  return suffixWords;
}
