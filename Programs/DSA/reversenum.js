/*

9. WAP in JS Function Reverse of a number

Input -53
output-35


*/


function revnum(num) {

    let r = 0, s = 0
    while (num > 0) {
        r = num % 10
        s = s * 10 + r
        num = Math.floor(num / 10)
    }
    console.log("Reverse Number is  =", s)
}

revnum(53)//35