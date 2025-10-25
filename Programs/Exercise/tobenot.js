
/*

Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other.
 If they are not equal, it should throw an error "Not Equal".


notToBe(val) accepts another value and returns true if the two values !== each other.
 If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explana
*/


var expect = function (val) {

    // return an object
    return {
        //first funtion
        toBe: (value) => {

            if (value === val) {
                return true
            } else {

                throw "Not Equal"
            }
        },

        //second funtion
        notToBe: (value) => {
            if (value !== val) {
                return true
            } else {
                throw "Equal"
            }

        }

    }
};

console.log(expect(5).toBe(5));   // true
expect(5).toBe(10);               // throws "Not Equal"
