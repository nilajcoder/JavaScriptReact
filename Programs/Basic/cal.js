
//npm install prompt-sync

// Import prompt-sync
const prompt = require("prompt-sync")();

// Take inputs from user
let num1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = Number(prompt("Enter second number: "));

let result;

// Perform calculation based on operator
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero!";
    }
} else {
    result = "Invalid operator!";
}

// Show result
console.log(`Result: ${result}`);
