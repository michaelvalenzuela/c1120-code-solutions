/* exported capitalizeWord */
function capitalizeWord(word){
  if(word.toLowerCase() === "javascript"){
    return word.charAt(0).toUpperCase() + word.slice(1,4).toLowerCase() + word.charAt(4).toUpperCase() + word.slice(5).toLowerCase();
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
