
/*
The first console.log subtracts 1 from the string "1", which JavaScript implicitly converts to the number 1, resulting in 0.

The setTimeout function schedules the execution of a function that logs 10 to the console after a 10-millisecond delay.

The final console.log outputs 2 immediately.
*/
console.log("1"-1);

setTimeout(function() {console.log(10)}, 10);

console.log(2);// 0 2 10
