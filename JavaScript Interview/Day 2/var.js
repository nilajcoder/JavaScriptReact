/*
let var & const
-----------------
var: variable can be redeclared & updated. A global scope variable  before 2015 we used var


but in 2015 in javascript has new features called ES6 and we use the following keyword

let:variable can not be re-declared but can be updated. block scope variable.

const: variable can not be re-declared or updated.A block scope variable.

*/


// line by line execution

//a = 10;
console.log(a);//undefined
var a;
a=10
//let a;  This code will throw a ReferenceError because you're trying to assign a value to a before it's initialized due to the temporal dead zone.
