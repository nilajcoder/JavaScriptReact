
/*

7.WAP in Js Function SWAP Two Numbers

input -5 6

Output - 6 5
*/


function swap(a, b){

    a=a+b
    b=a-b
    a=a-b

    console.log("After Swaping =" ,a,b)
}

swap(5,6) // 6 5
swap(10,20)//20 10