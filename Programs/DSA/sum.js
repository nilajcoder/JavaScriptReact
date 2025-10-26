/*

1. WAP in Js Input Numbers and add them 
Sum of digits
Expample - 531
  5+3+1=9
*/

function sumofdigits(num) {

    let sum = 0
    while (num > 0) {

        sum += num % 10;
        num = Math.floor(num / 10)
    }

    return sum;

}

console.log(sumofdigits(53))//8
console.log(sumofdigits(531))//9