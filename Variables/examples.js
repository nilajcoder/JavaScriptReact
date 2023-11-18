
//Dynamically typed language need not to mention data type of the variable

/*
Variable rules
1.Case sensitive
2.Letter digit underscore and $ allowed should be 1st Charecter
3.reseverd words can not be variables.
*/

/*

Data type in Js

Number String Boolean Null undefined Symbol Bigint
*/


//string
m="tony";
console.log(m);
//int
a=10;
console.log(a);

//float
b=10.25;
console.log(b);
//null
x=null;
console.log(x);
//undefined
y=undefined;
console.log(y);

//boolean
isfollow=false;
is=true;
console.log(isfollow);
console.log(is);

$full=5;
console.log($full);

 z=BigInt("9");
 console.log(z);

let p=Symbol("hello");
console.log(p);


/*
let var & const
-----------------
var: variable can be redeclared & updated. A global scope variable  before 2015 we used var


but in 2015 in javascript has new features called ES6 and we use the following keyword

let:variable can not be re-declared but can be updated. block scope variable.

const: variable can not be re-declared or updated.A block scope variable.

*/

//var

var age=25;
var age=45;
console.log(age)//45


//let
let n=76;
n=90;
n=86;
console.log(n);//86
//block scope
{
    let o=89;
    console.log(o);
}

{
    let o=54;
    console.log(o);

}


//const

const t=10;
console.log(t);

/*
Object collection of different variables
*/
const student={
    fullname:"Nilaj Chakraborty",
    age:26,
    cgpa:9.34,
    ispass:true,

};
console.log(student.age);


const product={
    title:"Ball pen",
    rating:5,
    offer:25,
    price:1200
};
console.log(product);



const profile={
    username:"@nilaj",
    isfollowes:true,
    followers: 100,
    following:120,
};

console.log(profile);