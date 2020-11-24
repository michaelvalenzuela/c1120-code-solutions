let $openButton = document.querySelector(".open-btn");
let $closeButton = document.querySelector(".close-btn");


$openButton.addEventListener("click", function(event){
  let $modal = document.querySelector(".modal");
  let $modalContainer = document.querySelector(".modal-container");


  $modal.className = $modal.className.replace("hide", "");

  $modalContainer.className = $modalContainer.className.replace("hide", "");

});

$closeButton.addEventListener("click", function(event){
  let $modal = document.querySelector(".modal");
  let $modalContainer = document.querySelector(".modal-container");

  console.log($modalContainer);
  $modal.className += "hide";
  $modalContainer.className += "hide";
});
