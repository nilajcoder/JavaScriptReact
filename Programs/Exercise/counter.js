/*

Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 
more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
*/

var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13