/*

** Four Example of falsy values in JS

1. undefined
var a;
console.log(typeof(a));// undefined
console.log(Boolean(a)); // false


 2. null
var a = null;
console.log(typeof(a));// object
console.log(Boolean(a));// false


 3. NaN
var a = NaN;
console.log(typeof(a));// number
console.log(Boolean(a));// false


 4. 0
var a = 0;
console.log(typeof(a));// number
console.log(Boolean(a));// false


 5. "" (empty string)
var a = "";
console.log(typeof(a));// string
console.log(Boolean(a));// false


** let b;
console.log(b);// undefined


** var a;
console.log(a);// undefined


** const a;
console.log(a);// SyntaxError: Missing initializer in const declaration


**

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;


**
console.log(a); // undefined
var a; // undefined


**
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a;


**
console.log(name);// undefined
var name;

1. {
    let a = 1;
    let b = 2;

    console.log(a);// 1
    console.log(b);// 2
}

console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined



2. {
    const a = 1;
    const b = 2;

    console.log(a);// 1
    console.log(b);// 2
}

console.log(a); // ReferenceError: a is not defined
console.log(b);// ReferenceError: b is not defined



3. {
    var a = 1;
    var b = 2;

    console.log(a);// 1
    console.log(b);// 2
}

console.log(a); // 1
console.log(b); // 2



4. console.log(a);// undefined
var a = 1;
console.log(a); // 1


5. console.log(a); // referenceError: a is not defined
let a = 1;
console.log(a); 


6. 
console.log(a); // referenceError: a is not defined
const  a = 1;
console.log(a); 


7. 
console.log(name);// undefined
var name = 'John Doe';
*/



