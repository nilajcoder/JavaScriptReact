
/*

WAP in Js Remove duplicate element in present array


What happens here:
new Set(arr)

The Set is a built-in JavaScript object that stores unique values only.

When you pass arr to Set, it automatically removes all duplicate elements.

Example: new Set(arr) → {1, 2, 3, 4, 5, 6, 8} (this is a Set object, not an array)

[... ] — Spread Operator

The spread operator ... is used to spread elements of an iterable (like a Set) into an array.

So [...new Set(arr)] converts the Set back into a regular array.

Final result:
uniqueArr becomes [1, 2, 3, 4, 5, 6, 8]


let arr = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 5, 6, 8];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);  // [1, 2, 3, 4, 5, 6, 8]



*/


let arr=[1,1,1,2,2,2,3,4,5,6,5,6,8]
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);  // [1, 2, 3, 4, 5, 6, 8]

