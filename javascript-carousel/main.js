let imagePaths = ["images/001.png", "images/004.png", "images/007.png", "images/025.png", "images/039.png", ]
let currentSlide = 0;
let timerId = null;
let $slides = document.querySelectorAll(".slide");
let $bullets = document.querySelectorAll(".bullet");
let $prevArrow = document.getElementById("prevArrow");
let $nextArrow = document.getElementById("nextArrow");
let length = $slides.length-1;

timerId = setTimeout(function(){
  changeSlide(currentSlide+1);
}, 3000);

for(let i = 0; i < $bullets.length; i++){
  $bullets[i].addEventListener("click", function(e){
    changeSlide(i);
  });
}

$prevArrow.addEventListener("click", function(e){
  changeSlide(currentSlide-1);
});

$nextArrow.addEventListener("click", function(e){
  changeSlide(currentSlide+1);
});

function changeSlide(slide){
  $slides[currentSlide].classList.add("hide");
  $bullets[currentSlide].classList.remove("selected");

  clearTimeout(timerId);
  timerId = setTimeout(function(e){
    changeSlide(currentSlide+1);
  }, 3000);

  if(slide < 0){
    currentSlide = length;
  }
  else if(slide > length){
    currentSlide = 0;
  }
  else{
    currentSlide = slide;
  }

  $slides[currentSlide].classList.remove("hide");
  $bullets[currentSlide].classList.add("selected");

}
