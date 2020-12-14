$userList = document.querySelector("#user-list");

function getData(){
  var request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.addEventListener("load", function () {
    console.log("XMLHttpRequest:", request.status);
    console.log("Response:", request.response);
    for (item of request.response) {
      let $listItem = document.createElement("li");
      $listItem.textContent = item.name;
      $userList.append($listItem);
    }
  });
  request.send();
}

getData();
