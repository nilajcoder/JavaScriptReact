const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item > 2); // Just returns true or false based on the condition

console.log(newArr);//[ false, false, true, true, true ]