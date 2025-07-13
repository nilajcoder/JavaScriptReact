


/*

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]

*/


/*
Merge Two Array
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [];

// Copy elements from arr1
for (let i = 0; i < arr1.length; i++) {
    merged[merged.length] = arr1[i];
}

// Copy elements from arr2
for (let i = 0; i < arr2.length; i++) {
    merged[merged.length] = arr2[i];
}

console.log(merged); // [1, 2, 3, 4, 5, 6]
