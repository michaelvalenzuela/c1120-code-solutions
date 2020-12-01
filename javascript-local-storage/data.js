/* exported todos */

var todos = [];
let previousTodosJSON = localStorage.getItem("javascript-local-storage");

if(previousTodosJSON !== null){
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener("beforeunload",function(event){
  let todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage',todosJSON);
});
