

/*


let numbers=new Array(1,2,3,4)
console.log(numbers)// [ 1, 2, 3, 4 ]



Push
-----

// Adds elements to the end of an array.
let arr=[1,2,3,4]
arr.push(5,6)
console.log(arr)// [ 1, 2, 3, 4, 5, 6 ]


POP
____


//Removes the last element and returns it.


let arr=[1,2,3,4,5,6]
arr.pop()

console.log(arr)// [ 1, 2, 3, 4, 5 ]

Shift
______

//Removes the first element and returns it.


let arr=[1,2,3,4,5,6]
arr.shift()
console.log(arr)// [ 2, 3, 4, 5, 6 ]


Unshift()
----------

//Adds elements to the beginning of an array.


let arr=[2,3,5]
arr.unshift(6)
console.log(arr)//[ 6, 2, 3, 5 ]


*/


/*

MAP :- it is a built in js array method it creates a new array calling function
let arr=[1,2,3,4]
let newarr=arr.map(num=>num>2)
console.log(newarr)//based on condition true false



let arr=[1,2,3,4]
let newarr=arr.map(num=>num*2)
console.log(newarr)//[2,4,6,8]
*/


/*

Filter - It Creates a new array based on the codition 

let arr=[1,2,3,4]
let newarr=arr.filter(num=>num>2)
console.log(newarr)// [3,4]



let arr=[1,2,3,4]
let newarr=arr.filter(num=>num%2==0)
console.log(newarr)//[2,4]
*/


/*

Reduce -It is a built in array method .It is used to reduced the array in a single value


let arr=[1,2,3,4]
let newarr=arr.reduce((acc,num)=>acc+num)
console.log(newarr)//10


let arr=[1,2,3,4]
let newarr=arr.reduce((acc,num)=>acc*num)
console.log(newarr)//24
*/



/*

🔍 find() vs filter()
Feature	            find()	                                                                     filter()
Purpose	   Finds the first element that matches a condition	             Filters all elements that match a condition
Returns	   A single element (or undefined)	                                   A new array of all matching elements
Stops At	 First match	                                                       Checks every item
Return Type	Value (element)	                                                      Array




const nums = [1, 3, 5, 7];
const result = nums.find(num => num > 4);
console.log(result); // Output: 5

*/