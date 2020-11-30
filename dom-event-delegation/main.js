let $taskList = document.querySelector(".task-list");

$taskList.addEventListener("click", function(e){
  console.log("event.target:", e.target);
  console.log("event.target.tagName:", e.target.tagName);
  if(e.target.tagName === "BUTTON"){
    let closest = e.target.closest(".task-list-item");
    console.log("closest(.task-list-item):", closest);
    closest.remove();
  }
})
