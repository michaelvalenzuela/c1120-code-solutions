let $h1 = document.querySelector("h1");

var id = setInterval(function() {
  let counter = $h1.textContent;
  if(counter > 0){
    counter -= 1;
    $h1.textContent = counter;
  }
  else{
    $h1.textContent = "~Earth Beeeelooowww Us~";
    clearInterval(id);
  }
}, 2000);
