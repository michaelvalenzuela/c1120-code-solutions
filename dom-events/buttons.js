function handleClick(event){
  console.log("button clicked");
  console.log(event);
  console.log(event.target);
}


let $button = document.querySelector(".click-button");

$button.addEventListener("click", handleClick);

function handleMouseover(event){
  console.log("Button Hovered");
  console.log(event);
  console.log(event.target);
}

let $hoverButton = document.querySelector(".hover-button");

$hoverButton.addEventListener("mouseover", handleMouseover);

function handleDoubleClick(event){
  console.log("Button Double-Clicked");
  console.log(event);
  console.log(event.target);
}

let $dblClickButton = document.querySelector(".double-click-button");

$dblClickButton.addEventListener("dblclick", handleDoubleClick);
