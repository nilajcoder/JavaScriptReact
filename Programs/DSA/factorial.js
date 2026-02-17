/*

5. WAP in js factorial

5 =120
*/




function factorial(num) {

    if (num === 0 || num === 1) {

        return 1
    } else {

        return num * factorial(num - 1)
    }
}

function printfactorial(n){
    for(let i=1;i<=n;i++){
        console.log(i +"=",factorial(i))
    }

}

printfactorial(5)//120


