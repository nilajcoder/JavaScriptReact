

/*

The spread operator (...) in JavaScript is used to expand elements
 of an array or object into individual elements. It’s very useful for copying, merging, and passing data.

🔹 Syntax:
javascript
Copy
Edit
...iterable
It works with arrays, objects, and function arguments.

✅ 1. Spread in Arrays
👉 Copying an Array
javascript
Copy
Edit
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]
👉 Merging Arrays
javascript
Copy
Edit
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

console.log(merged); // [1, 2, 3, 4]
✅ 2. Spread in Objects
👉 Copying an Object
javascript
Copy
Edit
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1 };

console.log(obj2); // { x: 1, y: 2 }
👉 Merging Objects
javascript
Copy
Edit
const objA = { a: 1 };
const objB = { b: 2 };
const merged = { ...objA, ...objB };

console.log(merged); // { a: 1, b: 2 }
✅ 3. Spread in Function Calls
javascript
Copy
Edit
const nums = [1, 2, 3];

function add(x, y, z) {
  return x + y + z;
}

console.log(add(...nums)); // 6
⚠️ Note: Spread vs Rest
... is spread when expanding values.

... is rest when collecting values.

Spread (expanding)
javascript
Copy
Edit
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
Rest (collecting)
javascript
Copy
Edit
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
*/