/*

11. WAP in JS Function If i Input a Number Print Even Numbers
    and Sum them

    Input- 5  (2 4)
    output - 2 4   sum=6
*/




function EvenPrintSum(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {

        if (i % 2 == 0) {
            console.log(i)
            sum = sum + i

        }
    }

    console.log("Sum of Even Number =", sum)
}

EvenPrintSum(5)