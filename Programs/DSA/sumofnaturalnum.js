/*

2. Sum Of Natural numbers 1 to n

Input =5  1+2+3+4+5=15
    
*/

function sumofnaturalnumber(num) {

    let sum = 0;

    for (let i = 0; i <= num; i++) {

        sum = sum + i;
    }

    return sum

}

console.log(sumofnaturalnumber(5))//15
console.log(sumofnaturalnumber(6))//21