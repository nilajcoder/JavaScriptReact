/*
Sync in JS
=============
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its excution.
*/

console.log("One");
console.log("Two");
console.log("Three");
/*
ASynchronous
===============
Due to Synchronous Programming,sometimes imp instructions 
get blocked due to some previous instrctions,which cause delay
in the UI . ASynchronous code execution allows to execute next
instruction immediately and does not block the flow.
*/
console.log("One");
console.log("Two");
setTimeout(()=>{
    console.log("hello");
},4000)// timeout 4s=4000ms
console.log("Three");
console.log("Four");


/*
Callbacks-A callback is a funtion passed as an argument to another funtion
*/
 function sum(a ,b){
    console.log(a+b);
 }

 function calculator(a,b,sumCallback){
    sumCallback(a,b);
 }
 /*
 here sum is a funtion that passed 
 as a argument in calculator funtion
 */
 calculator(1,2,sum); 







 /*

 */