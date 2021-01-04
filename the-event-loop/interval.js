let count = 3;
const intervalID = setInterval(function(){
  if(count === 0 ){
    console.log("Blast off!")
    clearTimeout(intervalID);
  }
  else {
    console.log(count--);
  }
}, 1000);
