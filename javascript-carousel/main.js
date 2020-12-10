let imagePaths = ["images/001.png", "images/004.png", "images/007.png", "images/025.png", "images/039.png", ]
let currentSlide = 0;
var timerId = null;

renderCarousel();
timerId = setTimeout(nextSlide, 3000);


function renderCarousel(){
  let $carouselContainer = document.querySelector(".carousel-container");
  let $bulletContainer = document.querySelector(".bullet-container");

  for(let i = 0; i < imagePaths.length; i++){
    let $div = document.createElement("div");
    $div.classList.add("slide");
    if(i !== 0){
      $div.classList.add("hide");
    }

    let $image = document.createElement("img");
    $image.setAttribute("src", imagePaths[i]);
    $image.setAttribute("alt", imagePaths[i].slice(imagePaths[i].length-7));

    $div.appendChild($image);
    $carouselContainer.appendChild($div);

    //create a bullet
    let $bullet = document.createElement("a");
    $bullet.classList.add("bullet");
    if(i === 0){
      $bullet.classList.add("select");
    }
    $bullet.setAttribute("onclick", "showSlide("+i+")");
    $bulletContainer.appendChild($bullet);
  }
}

function nextSlide(){
  let $slides = document.querySelectorAll(".slide");

  if(currentSlide === $slides.length-1){
    showSlide(0);
  }
  else{
    showSlide(currentSlide + 1);
  }
}

function prevSlide(){
  let $slides = document.querySelectorAll(".slide");

  if(currentSlide === 0){
    showSlide($slides.length-1);
  }
  else{
    showSlide(currentSlide-1);
  }
}

function showSlide(slideNumber){
  let $slides = document.querySelectorAll(".slide");
  let $bullets = document.querySelectorAll(".bullet");
  clearTimeout(timerId);
  timerId = setTimeout(nextSlide, 3000);

  currentSlide = slideNumber;
  for(let i = 0; i < $slides.length; i++){
    if (!$slides[i].classList.contains("hide")) {
      $slides[i].classList.add("hide");
    }
    if(i === slideNumber){
      $slides[i].classList.remove("hide");
    }
  }

  for(let i = 0; i < $bullets.length; i++){
    if (!$bullets[i].classList.contains("hide")) {
      $bullets[i].classList.remove("select");
    }
    if (i === slideNumber) {
      $bullets[i].classList.add("select");
    }
  }

}
