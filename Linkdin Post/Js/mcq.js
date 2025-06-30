
console.log([1,2,3]+[4,5,6]); // [1,2,34,5,6] - concatenation of two arrays

console.log("1,2,3" + "4,5,6")

console.log([1,2,3] - [4,5,6])// NaN

console.log(1+"1"-1)// 10

let x=1;
let y="1"
console.log(x==y) // true
console.log(x===y) // false


console.log(typeof NaN ==="number") // type``of NaN is number is string ==="strtring" // true
console.log(typeof[])// object

/*what is spread operator
 Spread operator is used to expand an iterable (like an array) into its individual elements.
It is denoted by three dots (...).
*/
function foo(){
    return;
    {
       bar : "hello";

    }
}
console.log(foo()) // undefined

/*
Which of this looping structure is not supported in JavaScript?
1. for..in
2. for..of
3. for..each
4. for..loop
Answer: 3. for..each
*/

/* const can not be updated or re-declared within the same scope.
const a=20;
a=30; // TypeError: Assignment to constant variable.




14. What is a promise in JavaScript?
A) A function that always returns true
B) A value that may be available now, later, or never
C) A global object for HTTP requests
D) A variable that can't be changed

Answer: B) A value that may be available now, later, or never
*/

console.log(typeof null) // object

let a={}
let b=a
a.name="JS"
console.log(b.name)// JS

/*
let is a block-scoped variable declaration keyword in JavaScript.
let can be updated
but not re-declared within the same scope.
*/
let arr=[1,2,3];
arr.length=0;
console.log(arr) // [] - empty array


const c = [1, 2];  
const d= [1, 2];  
console.log(JSON.stringify(c) === JSON.stringify(d));// true
// JSON.stringify() converts a JavaScript object or value to a JSON string.