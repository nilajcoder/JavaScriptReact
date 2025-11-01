/*
6. Wap in Js nth Fibonaaci number

 5 =0 1 1 2 3  5 8 13 = 5
  6 =8
*/



function fibo(num){

    if(num===0||num===1){

        return num;
    } else{

        return fibo(num-1)+fibo(num-2)
    }
}

console.log(fibo(6))//8
console.log(fibo(5))//5
