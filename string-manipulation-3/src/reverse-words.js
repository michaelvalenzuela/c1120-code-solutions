/* exported reverseWords */
function reverseWords(string){

  let words = string.split(" ");
  let reverse = "";

  for(word of words){
    for(let i = word.length; i >= 0; i--){
      reverse += word.charAt(i);
    }
    reverse += " ";
  }
  return reverse.substr(0, reverse.length-1);
}
