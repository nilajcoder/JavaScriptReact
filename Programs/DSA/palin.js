/*
12. WAP in Js Function Check Pallindrome 
    Number

    Input - 121
    Output -Pallindrome

*/


function checkpalindrome(num) {

    let s = 0, r, n
    n = num
    while (num > 0) {

        r = num % 10
        s = s * 10 + r
        num = Math.floor(num / 10);
    }
    if (s == n) {
        console.log("The number is Pallindrome = ", s)
    } else {
        console.log("The number is not Pallindrome ", s)
    }
}

checkpalindrome(121)
checkpalindrome(236)