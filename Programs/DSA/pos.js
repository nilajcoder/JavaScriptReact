/*

8. Check The Number Positive Negative or Zero


Input -5              -5             0
Output - Positive      Negative      Zero
*/

function checkposneg(num) {

    if (num > 0) {

        return "Positive"
    }
    else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }


}

console.log(checkposneg(0))
console.log(checkposneg(10))
console.log(checkposneg(-5))