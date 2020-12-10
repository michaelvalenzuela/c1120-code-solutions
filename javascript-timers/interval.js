let $h1 = document.querySelector("h1");

setInterval(function() {
  if($h1.textContent > 0){
    $h1.textContent -= 1;
  }
  else{
    $h1.textContent = "~Earth Beeeelooowww Us~";
    clearInterval(1);
  }
}, 2000);
