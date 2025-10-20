/*
Write a JavaScript program to check two numbers 
and return true if one of the number is 100 or
 if the sum of the two numbers is 100
*/


const equalto100 =(a,b)=> a===100 || b===100 || (a+b)===100

console.log( equalto100(100,0))
console.log(equalto100(50,50))
console.log(equalto100(0,100))

/*
Wap js get extension of a filename
*/

const filecheck=(str)=>str.slice(str.lastIndexOf('.'))

console.log(filecheck("abc.html"))
console.log(filecheck("abc.png"))