
/*
Asynchronous functions allow JavaScript to handle time-consuming tasks efficiently without blocking 
the execution of other code.
Common techniques include using callbacks, Promises, and async/await for handling asynchronous operations.
*/


console.log("1"-1);//0

setTimeout(function() {console.log(10)}, 10);//10

console.log(2);//2

setTimeout(function() {console.log(12)}, 10);//12
setTimeout(function() {console.log(11)}, 9);//11

// 0 2 11 10 12
