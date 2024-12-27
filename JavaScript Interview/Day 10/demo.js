/*

1.


console.log('a'-1)//nan
console.log('tilak'+100)

console.log(+false)//0
console.log(+true)//1
console.log(+null)//0
console.log(+undefined)//NaN
console.log(!"Nilaj")//false

console.log(null == undefined); // true because both are equal in value null is equal to undefined
console.log(null === undefined); // false because both are not equal in type undefind type is undefined and null type is object.

console.log(NaN == NaN); // false because nan is false in value and type is number
console.log(NaN === NaN);//false

console.log(typeof(NaN))//number
console.log(NaN)NAN
console.log(NaN==4) //false
console.log(NaN=="4")//falsy
console.log(NaN!=4)//true
console.log(NaN==true)// false
console.log(NaN==false) //false


2. 
const a = {}
const b = {
    name: 'tilak'
}
const c = {
    name: 'ram'
}
a[b] = {
    name: 'ankit'
}
a[c] = {
    name: 'rahul'
}

console.log(a[b]);//rahul



3. 
let arr = [5, 3, 8, 1, 2];

// Sort the array using a callback function
arr.sort((a, b) => a - b);  // Ascending order

console.log(arr);  // Output: [1, 2, 3, 5, 8]




4.  function infiniteCurry(val1){
    return function(val2){
        if(!val2){
            return val1;
        }
        return infiniteCurry(val1 + val2)
    }
}

console.log(infiniteCurry(1)(2)(3)())



5. //Array destructuring
let arr = [1, 2, 3];

// Destructuring the array into variables
let [a, b, c] = arr;

console.log(a);  // Output: 1
console.log(b);  // Output: 2
console.log(c);  // Output: 3

*/





