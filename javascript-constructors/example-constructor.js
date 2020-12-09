function ExampleConstructor(){
}

console.log("ExampleConstructor.prototype:",ExampleConstructor.prototype);
console.log("ExampleConstructor.prototype typeof:", typeof ExampleConstructor.prototype);

let example = new ExampleConstructor();
console.log("example obj:", example);
console.log("instanceof ExampleConstructor:", example instanceof ExampleConstructor);
