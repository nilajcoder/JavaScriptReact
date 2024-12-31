

/*
1. What is the Comma Operator?
The comma operator allows multiple expressions to be evaluated in a single statement.
 It evaluates each expression from left to right, but it only returns the value of the last expression.

1. const x=(4,5,6)
console.log("x =",x)//6
console.log(typeof x)//number


2. 
function abc() {
}

var abc

console.log(abc);//funtion :abc



3. console.log(n.toString(8));
n.toString(8) converts the number n (which is 10) into its string representation in base 8 (octal).

In base 8, 10 in decimal is represented as 12 (because 1 * 8^1 + 2 * 8^0 = 10 in decimal).

Output: 12

So, the second log prints "12", which is the base 8 (octal) representation of 10.


let n = 10;

console.log(n.toString());//10

console.log(n.toString(8));//12


4. 
function a() {
    console.log('hai');
    
}

console.log(a());//hai undefined



function a() {
    console.log('hai');
    return 10
}

console.log(a());//hai 10



5.  function abc() {
    console.log('xyz');
}

console.log(abc.name); // abc


6. 
console.log(abc)//Ref Error



7.
Why the Difference?
var: Variables declared with var are function-scoped or globally-scoped
 (if declared outside any function). When declared in the global scope, 
 they are added to the window object in browsers.

let and const: Variables declared with let or const have block scope 
(limited to the block, statement, or expression in which they are defined) and are not added to the global object.

var abc = 100;
let xyz = 200;

console.log(window.xyz); // undefined REF error
console.log(window.abc); // 100



8.

Key Points:
Strict mode makes arguments and function parameters (n1, n2) independent, meaning changes to parameters don't 
reflect in the arguments object.
The arguments object holds the original values passed to the function (100 and 200),
 even though you modified the parameters inside the function.
Let me know if you'd like further clarification!

function abc(n1, n2) {
    'use strict'
    n1 = 300;
    n2 = 400;
    return arguments[0] + arguments[1];
}

console.log(abc(100, 200));//300




function abc(n1, n2) {
    
    n1 = 300;
    n2 = 400;
    return arguments[0] + arguments[1];
}

console.log(abc(100, 200));//700

9. new xyz();//Ref Error

function abc() {
    console.log('hai');
}

class xyz {
}



10. const abc = 10 + isNaN(2) ? 100 : 200;//10+0?100:200   10?100:200
console.log(abc);//100



11. 
console.log(10 == 10); // true
console.log(10 == 10 == 10); // false true==10  1==10 
console.log(10 == 10 == 0); // false     1==0



12. 

console.log(parseInt(''))//NAN
console.log(Number(''))//0
console.log(parseInt("Nil"))//NAN

console.log(parseInt(true))//NAN
console.log(parseInt(false))//NAN

console.log(Number(true))//1
console.log(Number(false))//0

*/



