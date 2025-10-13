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

Day 1
----------
1.   let a = 5;
    let b = "5";
console.log(a == b); //true
console.log(a === b); //false


2. console.log(0.1 + 0.2 === 0.3); //false


3. console.log([] == []);//false

4. console.log(typeof NaN); //number

5. let x;
console.log(x + 2); //NAN


6. let x;
console.log(x - 2); //NAN



7. let x;
console.log(x * 2); //NAN


8. let x;
console.log(x / 2); //NAN


9. console.log("5" - 2); //3 number
console.log("5" + 2); //52 string

10. console.log(typeof typeof 1);//string   typeof number  number is string

console.log(typeof typeof 10.25);//string   

console.log(typeof typeof null);//string   

console.log(typeof typeof undefined);//string   


console.log( typeof typeof Infinity);//string   

console.log(typeof Object);//function


console.log( typeof typeof Object);//string   
console.log(typeof typeof true);//string

console.log(3 > 2 > 1); //false   true>1   type coreceion false

11.let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);//[1,2,3,4]


Day 2
__________

1. let a;
console.log(a); //undefined
console.log(typeof a); //undefined


2. console.log(null == undefined); //true
console.log(null === undefined); //false


3.   let x = "10";
     let y = 10;
console.log(x + y); //1010
console.log(x - y);//0


4.   console.log("2" > "12"); //true

console.log(1 > "12"); //false

console.log(1 < "12"); //true

console.log(null > "12"); //false

console.log(null < "12"); //true

console.log(undefined > "12"); //false

console.log(undefined < "12"); //false

console.log(-1 > "12"); //false

🧩 1. console.log("2" > "12"); // true

🧠 Explanation:

Both "2" and "12" are strings, not numbers.

When both sides are strings, JavaScript performs a lexicographical (dictionary-like) comparison — character by character from left to right.

"2" is compared with "1" first.

'2' (Unicode 50) is greater than '1' (Unicode 49).

✅ Output → true

🧩 2. console.log(1 > "12"); // false

🧠 Explanation:

Here, 1 is a number and "12" is a string.

When a number is compared to a string, JS converts the string to a number.

"12" → 12


Then it compares 1 > 12 → false.

✅ Output → false

🧩 3. console.log(1 < "12"); // true

🧠 Explanation:

"12" is again converted to 12.

So 1 < 12 → true.

✅ Output → true

🧩 4. console.log(null > "12"); // false

🧠 Explanation:

When comparing null with a number or string, JavaScript first converts:

null → 0

"12" → 12

Then it compares 0 > 12 → false.

✅ Output → false

🧩 5. console.log(null < "12"); // true

🧠 Explanation:

Again, null → 0 and "12" → 12.

0 < 12 → true.

✅ Output → true

🧩 6. console.log(undefined > "12"); // false

🧠 Explanation:

undefined is not converted to 0 like null.

When undefined is compared to a number, it becomes NaN (Not a Number).

Any comparison with NaN (except !=) is false.

✅ Output → false

🧩 7. console.log(undefined < "12"); // false

🧠 Explanation:

Same reason as above — undefined → NaN.

Any comparison with NaN is false.

✅ Output → false

🧩 8. console.log(-1 > "12"); // false

🧠 Explanation:

"12" → number 12.

Compare -1 > 12 → false.

✅ Output → false




5.  let a = 1;
let b = a++;
console.log(a, b); //2 1

let c = 1;
let d = ++c;
console.log(c, d); //2 2



6.  
let a = 5;
let b = "5";
console.log(a != b); //false
console.log(a !== b); //true


7. 
console.log([] + []); //""
console.log([] + {});// [object Object]
console.log({} + []);//[object Object]

 8.let value = "hello";
console.log(value[1]);//e
console.log(value[5]);// undefined


9.  let a = 0;
console.log(Boolean(a)); //false
console.log(!a);//true
console.log(!!a);// false

10. 
let a;
console.log(a + 1); //NAN
console.log(typeof a); //undfined


Day 3
------------

1. 
console.log(Boolean("false")); //true
console.log(Boolean(false)); // false

2. 
let a = [1, 2];
let b = [1, 2];
console.log(a == b); //false
console.log(a === b); //false

3. console.log([] == ![]); //true 


4. let a = "10";
let b = 10;
console.log(a + b); //1010 string
console.log(+a + b); //20 num


5. 

console.log(+""); //0
console.log(+"hello");// NAN
console.log(+true); //1
console.log(+false);//0


6. let name = "Ram";
function test() {
  console.log(name);
  let name = "Singh";
}
test();  // ref eroor


var name = "Ram";
function test() {
  console.log(name);// undefined
  var name = "Singh";
}
test();  // undefined


var name = "Ram";
function test() {
     var name = "Singh";
  console.log(name);// Sing
 
}
test();  // sing


let name = "Ram";
function test() {
     let name = "Singh";
  console.log(name);// Sing
 
}
test();  // sing


7. 
console.log(!!""); //false
console.log(!!"0");//true
console.log(!!0); //false


8. console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true


9. 
console.log(undefined === null); //false

console.log(undefined ==null); //true

10. let x = 10;
console.log(x && 5); //5
console.log(0 && 5); //0
console.log(x || 5); //10
console.log(0 || 5); //5
*/





























