//Arithematic operators
let a=10;
let b=2;
console.log("a=",a,"and b=",b)
console.log("Addition is",a+b);
console.log("Subtraction is",a-b);
console.log("Multiplication is",a*b);
console.log("Division is",a/b);
console.log(" Reminder is",a%b);// modulo operator
console.log("Exponent Of",a**b);//Exponent operator

//unary operator

let c=5;
let d=10;
console.log("c=",c,"and d=",d);
c++;//increment c=c+1;
d--;//decrement d=d-1;
console.log("After increment",c);
console.log("After decrement",d);

//post increment
let x=5;
let y=4;
console.log("x=",x,"and y=",y);
console.log("value of x++",x++);//5
console.log("value of x",x);//6

//pre decrement
console.log("value of --y",--y);//3
console.log("value of y",y);3

//pre increment
let p=5;
let q=4;
console.log("p=",p,"and q=",q);
console.log("value of ++p",++p);//6
console.log("value of p",p);//6

//post decrement 
console.log("value of q-- post",q--);//4
console.log("value of q",q);//3


//Assignment operators
let m=5;
let n=4;
let o=8;
let r=6;
let s=7;
let t=10;
console.log("m=",m,"n=",n,"o=",o,"r=",r,"s=",s,"t=",t);
m+=4; //5+4=9 m+4
n-=3;//4-3=1 n-3
o*=7;//8*7=56 o*7
r**=2 //6^2=36 r^2
s%=7;//7%7=0 s%7
t/=5;// 10/5=2 t/5

console.log("Value of m is=",m);//9
console.log("Value of n is=",n);//1
console.log("value of o is=",o);//56
console.log("Value of r is=",r);//36
console.log("Value of s is=",s);//0
console.log("value of t is=",t);//2


//Comparison operator
let e=5;
let f=4;
let g=5;
let v="5";
console.log("e=",e,"f=",f,"g",g,"v=",v);
console.log(e==f);//false boolean value
console.log(e==g);//true
console.log(f!=e);//true
console.log(e>f);//true
console.log(e<f);//false
console.log(e<=f);//false
console.log(e>=g);//true
console.log(e===v);//false
console.log(e !==v);//true


//Logical Operator
let h=5;
let i=6;
let con1=i>h;//true
let con2= i==6;//true

console.log("&&",con1&&con2);//true
console.log("||",con1||con2)//true
console.log("!",!(h>i));//true

//Conditional Statement

let age=25;
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}


//ternary operator
let agee=25;
let result=agee>=18 ?"adult":"not adult";
console.log(result);




let num=prompt("Enter a number");
if(num%5==0){
    console.log(num,"is multiple of 5");
} else{
    console.log(num,"is not multiple of 5");
}


//Q2
let score=75;
let grade;
if(score>=90 && score<=100 ){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="F";
}
console.log("According to your score ,Your grade is",grade);