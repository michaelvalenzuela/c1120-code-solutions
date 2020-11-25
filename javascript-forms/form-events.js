function handleFocus(event){
  console.log("focus event was fired");
  console.log(event.target.name);
}

function handleBlur(event){
  console.log("blur event was fired");
  console.log(event.target.name);
}

function handleInput(event){
  console.log(event.target.name);
  console.log(event.target.value);
}

let $userName = document.querySelector("#user-name");
let $userEmail = document.querySelector("#user-email");
let $userMessage = document.querySelector("#user-message");

$userName.addEventListener("focus", handleFocus);
$userName.addEventListener("blur", handleBlur);
$userName.addEventListener("input", handleInput);

$userEmail.addEventListener("focus", handleFocus);
$userEmail.addEventListener("blur", handleBlur);
$userEmail.addEventListener("input", handleInput);

$userMessage.addEventListener("focus", handleFocus);
$userMessage.addEventListener("blur", handleBlur);
$userMessage.addEventListener("input", handleInput);
