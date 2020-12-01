let $text = document.querySelector(".text");
let $spans = document.querySelectorAll(".span");
let current = 0;
$spans[current].classList.add("curr");

document.addEventListener("keydown", function(event){
  if(event.key === $spans[current].textContent){
    $spans[current].classList.remove("curr");
    $spans[current].classList.add("correct");
    if($spans[current].classList.contains("wrong")){
      $spans[current].classList.remove("wrong");
    }
    $spans[++current].classList.add("curr");
  }
  else{
    $spans[current].classList.add("wrong");
  }

  if(current >= $spans.length){
    reset();
  }
});

function reset(){
  current = 0;
  $spans[current].classList.add("curr");
  for(span of $spans){
    span.classList.remove("correct");
  }
}
