let $tabContainer = document.querySelector(".tab-container");
let $allTabs = document.querySelectorAll(".tab");
let $allViews = document.querySelectorAll(".view");

$tabContainer.addEventListener("click", function(e){
  if(e.target.matches(".tab")){
    let $dataView = e.target.getAttribute("data-view");

    for(tab of $allTabs){
      if(e.target === tab){
        tab.classList.add("active");
      }
      else {
        tab.classList.remove("active");
      }
    }

    for(view of $allViews){
      console.log(view);
      if(view.getAttribute("data-view") === $dataView){
        view.classList.remove("hidden");
      }
      else {
        view.classList.add("hidden");
      }
    }
  }
})
