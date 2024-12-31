/*
1.

console.log([]==[])//false
console.log([]=="")//true

const a = [];
const b = [];
console.log(a == b);   // false
console.log(a === b);  // false


2.Key Points:
~~ is used to truncate the decimal part and convert a floating-point number to an integer.
It does not round the number; it simply removes the fractional part.
It works by performing two bitwise NOT operations.

function print(x){
    console.log(~~x)
}

print(2.8)//2


3. function xyz(a,b=0,c){

}
console.log(xyz.length)//1



function xyz(a,b,...args){

}
console.log(xyz.length)//2


4. 
const str = "hello world";
const formattedStr = str.replace(" ", "\n");
console.log(formattedStr);

*/




