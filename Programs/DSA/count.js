
/*
3. WAP Count Of a Digit
input- 521
output -  3
*/


function countofdigit(num) {

    let count = 0

    while (num > 0) {

        num = Math.floor(num / 10)
        count++
    }

    return count
}
console.log(countofdigit(251))//3
console.log(countofdigit(4528))//4