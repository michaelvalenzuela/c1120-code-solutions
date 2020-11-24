/* exported isPalindromic */
function isPalindromic(string){
  let i = 0;
  let j = string.length-1;

  while(i < j){
    if(string[i] === " " ){
      i++;
    }
    if(string[j] === " "){
      j--;
    }
    if(string[i++] !== string[j--]){
      return false;
    }
  }
  return true;
}
