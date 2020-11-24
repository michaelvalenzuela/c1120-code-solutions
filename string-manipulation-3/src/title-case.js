/* exported titleCase */
function titleCase(string){
  let minors = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
  let acronyms = ["Api"];

  string = string.replace(new RegExp(/([^\W_]+[^\s-]*) */g), function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  for (let i = 0; i < minors.length; i++){
    string = string.replace(new RegExp('\\s' + minors[i] + '\\s', 'g'),
      function (txt) {
        return txt.toLowerCase();
      });
  }

  for (let i = 0; i < acronyms.length; i++){
    string = string.replace(new RegExp('\\b' + acronyms[i] + '\\b', 'g'),
      acronyms[i].toUpperCase());
  }

  string = string.replace("Javascript", "JavaScript");

  string = string.replace(new RegExp(/:\s[a-z]/g),
    function(txt) {
      return txt.toUpperCase();
    });

  return string;
}
