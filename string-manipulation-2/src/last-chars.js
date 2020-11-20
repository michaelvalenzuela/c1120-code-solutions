/* exported lastChars */
function lastChars(length, string){
  let begin = string.length - length;
  return string.substr(begin < 0 ? 0 : begin, length);
}
