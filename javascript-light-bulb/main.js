
let $circle = document.querySelector(".circle");

$circle.addEventListener("click", function(event){
  let $container = document.querySelector(".container");

  if($circle.className.indexOf(1) !== -1){
    $circle.className = $circle.className.replace(1,0);
    $container.className = $container.className.replace(1,0);
  }
  else {
    $circle.className = $circle.className.replace(0, 1);
    $container.className = $container.className.replace(0, 1);
  }

  console.log($circle.className);
  console.log(event);
});
