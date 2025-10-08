/*-
function a() {
    var b=10;
    c();
    function c() {
        console.log(b);
        
    }
    
}
a();

// Output: 10
*/
/*
2.WAP In JS to print 1 to 5 with 1 sec interval then 2 then 3 so on using setTimeout  and closure

function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        },i* 1000);
    }
}
x();// Output: 1 2 3 4 5

*/

/*
3
function x(){
    for(var i=1; i<=5; i++){
        function closer(x){
            setTimeout(function(){
                console.log(x);
            },x* 1000);

        }
        closer(i);
       
    }
}
x();
// Output: 1 2 3 4 5


4. wAP to find area of circle using function and array

const radius =[5,6,7,8,9];
const area = function(radius){
    const Output =[];
    for(let i=0; i<radius.length; i++){
        Output.push(Math.PI*radius[i]*radius[i]);
    }
    return Output;
}

console.log(area(radius));

What is Higher order function?
ans: A higher-order function is a function that takes
 one or more functions as arguments, returns a function as its result,
  or both. In other words, it can operate on functions, either by taking them as parameters or by returning them.

5. Higher order function to find area, circumference and diameter of circle using function and array
const radius =[5,6,7,8,9];

const area = function(radius){
    
    return Math.PI*radius*radius;
};

const circumference = function(radius){
        
        return 2*Math.PI*radius;
    };

const diameter = function(radius){
            
            return 2*radius;
 }

const calculate = function(radius, logic){
    const Output =[];
    for(let i=0; i<radius.length; i++){
        Output.push(logic(radius[i]));
    }
    return Output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


6. Map 

const r=[5,6,7,8,9];
const Double = function(x){
    return 2*x;
};

function Square(x){
    return x*x;
}

function Cube(x){
    return x*x*x;
}

function SquareRoot(x){
    return Math.sqrt(x);
}
function Binary(x){
    return x.toString(2);
}

const Output=r.map(Double)
const Output1=r.map(Binary)
console.log(Output1);
console.log(Output);

7. Filter

const r=[5,6,7,8,9];

function isOdd(x){
    return x%2!==0;
}
function isEven(x){
    return x%2===0;
}

function isPrime(x){
    if(x<2) return false;
    for(let i=2; i<=Math.sqrt(x); i++){
        if(x%i===0) return false;
    }
    return true;
}
function isPerfectSquare(x){
    return Number.isInteger(Math.sqrt(x));
}
function isArmstrong(x){
    const str = x.toString();
    const len = str.length;
    let sum = 0;
    for(let i=0; i<len; i++){
        sum += Math.pow(Number(str[i]), len);
    }
    return sum === x;
}

const Output=r.filter(isOdd)
const Output1=r.filter(isEven)
console.log(Output1);
console.log(Output);

8. Reduce

const r=[5,5,5,5,5];

function sumofall(x){
    let sum = 0;
    for(let i=0; i<x.length; i++){
        sum += x[i];
    }
    return sum;
}

const Output=r.reduce((acc, curr) => acc + curr, 0);

console.log(Output);
*/



// Four Example of falsy values in JS
/*
// 1. undefined
var a;
console.log(typeof(a));// undefined
console.log(Boolean(a));
// 2. null
var a = null;
console.log(typeof(a));// object
console.log(Boolean(a));// false


// 3. NaN
var a = NaN;
console.log(typeof(a));
console.log(Boolean(a));
// 4. 0
var a = 0;
console.log(typeof(a));// number
console.log(Boolean(a));// false
*/
/*
// 5. "" (empty string)
var a = "";
console.log(typeof(a));// string
console.log(Boolean(a));// false
*/

/*
let b;
console.log(b);// undefined

*/


/*
var a;
console.log(a);// undefined

*/
/*
const a;
console.log(a);// SyntaxError: Missing initializer in const declaration

*/


/*
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
*/

/*
console.log(a); // undefined
var a; // undefined
*/

/*
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a;
*/

/*
console.log(name);// undefined
var name;
*/

/*
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // 5*
*/

/* Lambda function or Arrow function  Example give the output of 1 to 5
  
  What is Lambda function or Arrow function?
    ans: An arrow function is a shorter syntax for writing function expressions in JavaScript.
          example: const add = (a, b) => a + b;
            It is a more concise way to write functions, especially when using them as arguments to higher-order functions.
            what is expression?
            ans: An expression is a piece of code that produces a value. It can be a variable, a function call, or an operation that evaluates to a value.


const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]



function sum(...num){
    return num.reduce((a,b)=>a+b,0)
}

console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))


console.log(typeof null);//object


  let a = 5;
let b = "5";
console.log(a == b); //true
console.log(a === b); //false


console.log(0.1 + 0.2 === 0.3); //false


console.log([] == []);//false

console.log(typeof NaN); //number

let x;
console.log(x + 2); //NAN


let x;
console.log(x - 2); //NAN



let x;
console.log(x * 2); //NAN


let x;
console.log(x / 2); //NAN


console.log("5" - 2); //3 number
console.log("5" + 2); //52 string

console.log(typeof typeof 1);//string   typeof number  number is string

console.log(typeof typeof 10.25);//string   

console.log(typeof typeof null);//string   

console.log(typeof typeof undefined);//string   


console.log( typeof typeof Infinity);//string   

console.log(typeof Object);//function


console.log( typeof typeof Object);//string   
console.log(typeof typeof true);//string

console.log(3 > 2 > 1); //false   true>1   type coreceion false

let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);//[1,2,3,4]
*/










