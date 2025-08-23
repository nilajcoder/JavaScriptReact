

// 1. Arithmetic Operators
let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1 (Modulus / Remainder)
console.log(a ** b); // 1000 (Exponentiation a^b)

//Increment & Decrement:

a++; // Post-increment
++a; // Pre-increment
a--; // Post-decrement
--a; // Pre-decrement

// 2. Assignment Operators

//Assign values to variables.
let x = 10;

x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 5; // x = 1
x **= 3; // x = 1^3 = 1



//🔹 3. Logical Operators

//Used for boolean logic.

console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)


//4. Ternary Operator

//Short-hand for if...else.
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"


//5.  Comparison Operators

console.log(5 == "5");   // true  (loose equality, type conversion allowed)
console.log(5 === "5");  // false (strict equality, no type conversion)
console.log(5 != "5");   // false loose checking
console.log(5 !== "5");  // true strict checking
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 3);     // false

/*
== vs === → loose vs strict equality.

!= vs !== → loose vs strict inequality.

> , < , >= , <= → normal number comparison.
*/



// 5. Bitwise Operators

//Operate at the binary level.

console.log(5 & 1);  // 1  (AND)
console.log(5 | 1);  // 5  (OR)
console.log(5 ^ 1);  // 4  (XOR)
console.log(~5);     // -6 (NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2  (Right shift)



/*

1. console.log(5 & 1); // 1 (AND)

👉 Bitwise AND (&) → 1 if both bits are 1.

  0101   (5)
& 0001   (1)
  ----
  0001   (1 in decimal)


✅ Result = 1

2. console.log(5 | 1); // 5 (OR)

👉 Bitwise OR (|) → 1 if either bit is 1.

  0101   (5)
| 0001   (1)
  ----
  0101   (5 in decimal)


✅ Result = 5

3. console.log(5 ^ 1); // 4 (XOR)

👉 Bitwise XOR (^) → 1 if bits are different.

  0101   (5)
^ 0001   (1)
  ----
  0100   (4 in decimal)


✅ Result = 4

4. console.log(~5); // -6 (NOT)

👉 Bitwise NOT (~) → Flips every bit (0 → 1, 1 → 0).
JavaScript uses 32-bit signed integers internally for bitwise ops.

Binary of 5 (32-bit):

00000000 00000000 00000000 00000101   (5)


Flipping bits:

11111111 11111111 11111111 11111010


This is two’s complement representation → equals -6.
✅ Result = -6

5. console.log(5 << 1); // 10 (Left shift)

👉 Left shift (<<) → shifts bits left, filling with 0s.

  0101   (5)
<< 1
  ----
  1010   (10 in decimal)


✅ Result = 10

6. console.log(5 >> 1); // 2 (Right shift)

👉 Right shift (>>) → shifts bits right, preserving sign.

  0101   (5)
>> 1
  ----
  0010   (2 in decimal)


✅ Result = 2
*/