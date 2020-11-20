/* exported swapChars */
function swapChars(firstIndex, secondIndex, string){
  let retString = "";

  for(let i = 0 ; i < string.length; i++){
    if(firstIndex === i){
      retString += string.charAt(secondIndex);
    }
    else if(secondIndex === i){
      retString += string.charAt(firstIndex);
    }
    else{
      retString += string[i];
    }
  }

  return retString;
}
