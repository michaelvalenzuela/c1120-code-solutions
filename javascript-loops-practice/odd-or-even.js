/* exported oddOrEven */

function oddOrEven(array){
  let oddOrEvenArray = [];

  for(value of array){
    value%2 === 0 ? oddOrEvenArray.push("even") : oddOrEvenArray.push("odd");
  }

  return oddOrEvenArray;
}
