/*

1.  var x = {
    a: '1',
    b: '2',
    a: '3',
    'b': 4
}
console.log(x)// a=3 b=4  { a: '3', b: 4 }


2. 
console.log(!"hii")// false


3.  for(let i=0;i<6;i++){     . First loop with let (Block-scoped):
    setTimeout(function(){
        console.log(i)
    },(10))
}
for(var i=0;i<6;i++){         Second loop with var (Function-scoped):
    setTimeout(function(){
        console.log(i)
    },(10))
}

Ans: 1
2
3
4
5
6
6
6
6
6
6


4. let obj={
    name:'rajyalakshmi'
}
let z=obj
z.name='Adil'
console.log(obj.name)// adil



5. let a = 5;
let b = 10;

// Swap values using arithmetic
a = a + b;  // a becomes 15  5+10
b = a - b;  // b becomes 5  15-10
a = a - b;  // a becomes 10  15-5

console.log(a); // 10
console.log(b); // 5


6. 
let str = "my name is ram sing";

// Capitalize the first letter of each word
let result = str.replace(/\b\w/g, char => char.toUpperCase());

console.log(result);  // Output: "My Name Is Ram Sing"



7. 
let str = "Ram Sing";

// Split the string into words, swap them, and join them back
let result = str.split(' ').reverse().join(' ');

console.log(result);  // Output: "Sing Ram"



*/






