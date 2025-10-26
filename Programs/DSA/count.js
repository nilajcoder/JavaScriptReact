
/*
3. WAP Count Of a Digit
input- 521
output -  3
*/


function countofdigit(num) {

    let count = 0

    while (num > 0) { //251 // 25 //2
 
        num = Math.floor(num / 10) //251/10=25 //25/10=2 //2/10=0
        count++ //1 2 3
    }

    return count
}
console.log(countofdigit(251))//3
console.log(countofdigit(4528))//4