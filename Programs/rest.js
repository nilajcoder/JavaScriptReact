

/*


The rest operator in JavaScript (also written as ...) is used to
 collect multiple elements into a single array or object. It’s the opposite of the spread operator.

🔹 Use of ... as Rest Operator
It is used to:

Collect function arguments

Gather remaining array or object elements during destructuring

✅ 1. Rest in Function Parameters
Collects all remaining arguments into an array.

javascript
Copy
Edit
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
✅ 2. Rest in Array Destructuring
javascript
Copy
Edit
const [first, second, ...others] = [1, 2, 3, 4, 5];

console.log(first);  // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]
✅ 3. Rest in Object Destructuring
javascript
Copy
Edit
const person = {
  name: "Ram",
  age: 25,
  city: "Delhi",
  country: "India"
};

const { name, ...rest } = person;

console.log(name); // "Ram"
console.log(rest); // { age: 25, city: "Delhi", country: "India" }
⚠️ Rest vs Spread
Feature	Rest Operator	Spread Operator
Collects values	Yes	No
Expands values	No	Yes
Syntax	...	...
Use case	Function args, destructuring	Function calls, cloning, merging
*/