/*

Condition Check (if (num)):

In JavaScript, the if statement checks whether num is truthy or falsy.
A falsy value is a value that evaluates to false in a Boolean context. Common falsy values include 0, "" (empty string), null, undefined, and false.
A truthy value is anything that is not falsy. For example, all non-zero numbers are truthy.
Execution of Code Inside if:

If num is truthy, the count variable is incremented by 1.
Iterating Over the Array:

When num = 0: if (0) evaluates to false, so count remains 0.
When num = 1: if (1) evaluates to true, so count becomes 1.
When num = 2: if (2) evaluates to true, so count becomes 2.
When num = 3: if (3) evaluates to true, so count becomes 3.


1. let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
    if (num) {
        count = count + 1;
    }
});

console.log(count);//3



2. console.log(typeof typeof(10))//string
   console.log(typeof Array) //funtion
   
class abc {

}
console.log(typeof abc)//function


console.log(typeof 10)//number
console.log(typeof "10")//string
console.log(typeof NaN)//number
console.log(typeof Boolean)//function
console.log(typeof undefined)//undefined
console.log(typeof parseFloat)//function
console.log(typeof Symbol)//function
console.log(typeof BigInt)// function


$full=5;
console.log($full);//5

 z=BigInt("9");
 console.log(z);//9n

let p=Symbol("hello");
console.log(p);//Symbol(hello)


3. function myFunc() {
    "use strict"
    xyz = 100;
    console.log(xyz);
}

console.log(myFunc());//error


function myFunc() {
    
    xyz = 100;
    console.log(xyz);
}

console.log(myFunc())// 100 underdefined




function myFunc() {
    
   var xyz = 100;
    console.log(xyz);
}

console.log(myFunc())// 100 underdefined


function myFunc() {
      "use strict"
    let xyz = 100;
     console.log(xyz);
 }
 
 console.log(myFunc())// 100 underdefined



 4. 

var: variable can be redeclared & updated. A global scope variable  before 2015 we used var


but in 2015 in javascript has new features called ES6 and we use the following keyword

let:variable can not be re-declared but can be updated. block scope variable.

const: variable can not be re-declared or updated.A block scope variable.


i)var xyz=1 + abc//1+ undefined =NAN
 var abc=100
console.log(xyz)//NAN



ii)var xyz=1 + abc
 abc=100
console.log(xyz)//ERROR REF

iii)let xyz=1 + abc
 let abc=100
console.log(xyz)//ERROR REF


iv)const xyz=1 + abc
 const  abc=100
console.log(xyz)//ERROR REF


5. 
const data = {
    name: "Nabil",
}

const abc = [1, 2, 3, 4]
console.log(delete data);//false
console.log(delete abc);//false

Explanation of the delete Operator:
The delete operator in JavaScript is used to remove properties from objects, not variables or constants.
delete can only work on properties of objects that are configurable.
Trying to use delete on a variable, function, or constant will not remove it but will typically result in false.



6.  

const a = [];
const b = [];
console.log(a == b);   // false
console.log(a === b);  // false




1. Arrays are Objects in JavaScript
Both a and b are arrays, and arrays in JavaScript are objects.
When comparing objects (or arrays), the comparison checks whether the two operands refer to the same memory location (i.e., the same instance in memory), not whether their contents are the same.
2. a == b
The == operator performs a loose equality check. It checks if a and b refer to the same object in memory.
Here, a and b are two separate arrays (two separate instances in memory). Even though both are empty, they are distinct objects.
Therefore, a == b evaluates to false.

*/





