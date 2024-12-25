/*


1. const myFn = () => {
    console.log("hi");
  }
  
  myFn() // hi

2.    function abc(a, b) {
    "use strict"
    let a = 100, b = 200
    return arguments[0] + arguments[1]
    console.log(a + b)
}

console.log(abc(10, 20))// error

use strict is used to avoid the use of undeclared variables.
  


3.  
var abc = 10;
let xyz = 20;

console.log(window.abc, window.xyz); // error because abc is not defined in window object but xyz is defined in window object
                                         // window object is a global object in browser environment
                                         //   purpose of window object is to store global variables and functions



4. 
 console.log(null == undefined); // true because both are equal in value null is equal to undefined
console.log(null === undefined); // false because both are not equal in type undefind type is undefined and null type is object.

console.log(NaN == NaN); // false because nan is false in value and type is number
console.log(NaN === NaN); // false because nan is false in value and type is number

5. 
const str = "hello world";
const formattedStr = str.replace(" ", "\n");
console.log(formattedStr); // hello  world because replace method only replace first occurance of the string in the string
                            


6.  console.log(isNaN("fardeen")); // true because fardeen is not a number 
 console.log(!'fardeen'); // false because fardeen is a string
console.log(+false); // 0 because false is equal to 0

  */

                            


