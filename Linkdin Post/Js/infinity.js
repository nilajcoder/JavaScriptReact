

/*Definition:
Infinity is a special numeric value in JavaScript that represents something larger
 than the maximum possible number.

It is a global constant.

*/

let a=10/0
console.log(a)//Infinity

/*
Note:
Infinity is not an error

Operations with Infinity often result in Infinity or NaN
*/
console.log(Infinity === Infinity);  // true
console.log(isFinite(Infinity));     // false

console.log(Infinity - 1 *8-5);  // Infinity
console.log(Infinity - Infinity);  // NaN
console.log(1+Infinity) //Infinity



console.log(1 / 0);    // Infinity
console.log(-1 / 0);   // -Infinity
console.log(Number.MAX_VALUE * 2);  // Infinity

let x = 5;
if (x < Infinity) {
  console.log("x is less than Infinity");
}

