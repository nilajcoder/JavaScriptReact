
/*
event propagession

Capturing Phase: document → grandparent → parent → child.
Target Phase: The event is processed at the child element.
Bubbling Phase: child → parent → grandparent → document.




1.  function abc() {
    console.log(abc.xyz);
}

abc()//undefine
abc.xyz = 400
abc.xyz = 200
abc()//200

output 
undefined
200

2. const numbers = [1, 2, 3, 4]
numbers[100] = 500
console.log(numbers)
output 
[ 1, 2, 3, 4, <96 empty items>, 500 ]

3. console.log(typeof 10)//number
console.log( typeof typeof 10)//String


4. Spread operator (...)

The spread operator expands an iterable (like a string, array, or object) into individual elements.
const arr=[..."nilaj"];
console.log(arr)

output

[ 'n', 'i', 'l', 'a', 'j' ]


5. parseInt converts string into Number

console.log(parseInt("10"))//10
console.log(parseInt("N"))//Nan
console.log(parseInt("Nil"))//NaN
console.log(parseInt('10+2'))//10
console.log(parseInt('7FM'))//7
console.log(parseInt('M7F'))//NaN

console.log(isNaN("nilaj"))//true
console.log(NaN("nil"))//error




6. console.log([1,2].map(num=>{
    if(num>0) return ;
    return num * 2
}))

output 
undefined
undefined


7. {
    function abc(){
        console.log("hii")
    }

    
}

abc()


ouput
hii
*/



