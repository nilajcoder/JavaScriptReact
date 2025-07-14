


/*
WAP Fibonaci  nth number
*/
function fibo(n) {

    if (n==0||n==1) {
        
        return n
    } else{

        return fibo(n-1)+fibo(n-2)
    }
    
}
console.log(fibo(6))//8

