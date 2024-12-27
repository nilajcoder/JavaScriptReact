
/*


Let me explain step-by-step in simpler terms. We'll break it down carefully:

Code:
javascript
Copy code
let arr = [1, 2, 3, 4][1, 2, 3];
console.log(arr);
Step 1: Understand the array
You have an array:

javascript
Copy code
[1, 2, 3, 4]
The array has these values:
Index 0 → 1
Index 1 → 2
Index 2 → 3
Index 3 → 4
Step 2: Understand [1, 2, 3]
Inside the square brackets, you wrote:

javascript
Copy code
[1, 2, 3]
This is a special situation because JavaScript treats this as an expression.

Step 3: What is an "expression"?
An expression evaluates something and produces a value.

In JavaScript, when you write something like:
javascript
Copy code
[1, 2, 3];
It means:
Look at all the numbers.
Only use the last number in this list.
So [1, 2, 3] evaluates to 3.
Step 4: Replace [1, 2, 3] with 3
Now your code becomes:

javascript
Copy code
let arr = [1, 2, 3, 4][3];
Step 5: Access the value at index 3
In the array [1, 2, 3, 4], the index 3 refers to the last element, which is 4.
So:

javascript
Copy code
arr = 4;
Step 6: Output the result
Finally:

javascript
Copy code
console.log(arr); // Outputs: 4

1. let arr = [1, 2, 3, 4][1, 2, 3];  this is expression
console.log(arr);// 4



2. 
map and forEach are both methods available in JavaScript arrays that allow you to perform operations on each element of the array. However, they are different in their purpose and behavior.

1. map Method
The map method creates a new array by applying a callback function to each element of the original array.

Key Features:
Returns a new array with the transformed values.
Does not modify the original array.
Used when you need to transform or derive new data from the original array.
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)
2. forEach Method
The forEach method executes a callback function for each element in the array. It does not return a new array.

Key Features:
Does not return anything (undefined).
Typically used for side effects, like logging, updating variables, or modifying elements in place.
Does not break or return early (no return in forEach).
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * num));

// Output:
// 1
// 4
// 9
// 16

console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)



3. function fn() {
    console.log("hello")
}

fn();// hello



4. function fn() {
    return 100;
}

var fn;
console.log(fn);// [Function: fn]


5. class abb {


}
console.log(typeof(abb))// function


6. 
console.log("a" -1)//NAN
*/


