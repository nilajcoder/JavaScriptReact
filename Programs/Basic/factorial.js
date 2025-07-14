

/*

WAP in Js Factorial of a Number
*/
function factorial(n) {

    if (n==0||n==1) {

        return 1;
        
    } else{

        return n*factorial(n-1)
    }
    
}

console.log("Factorial Of a Number = ",factorial(5))



