let x;
console.log(typeof x); // "undefined"

let y = 10;
console.log(typeof y); // "number"

let z = 10.25;
console.log(typeof z); // "number"

let a = true;
console.log(typeof a); // "boolean"

let b = "nilaj";
console.log(typeof b); // "string"

let c = null;
console.log(typeof c); // "object" ❗ (this is a JS quirk/bug)

let d = BigInt(8);
console.log(typeof d); // "bigint"

let e = Symbol("hi");
console.log(typeof e); // "symbol"




console.log(typeof NaN); // "number"  ❗ (NaN means "Not a Number", but still a number type)

console.log(typeof Infinity); // "number"

console.log(typeof []); // "object"  ❗ (Array is technically an object)

console.log(typeof {}); // "object"

console.log(typeof function(){}); // "function"  ✅ (Special case)

console.log(typeof new Date()); // "object"

console.log(typeof null); // "object" ❗ (JS bug)


console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true (because "hello" is not a number)
console.log(isNaN(123)); // false
