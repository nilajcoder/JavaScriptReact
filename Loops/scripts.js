//Loops for loop

for(let i=1;i<=5;i++){
    console.log("Hello world");
}

//print 1 to 5

for(let i=1;i<=5;i++){
    console.log(i);
}

//calculate sum of 1 to n
let sum=0;
let n=5;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log("Sum of n numbers =",sum);

//while loop
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}

//do while 1 to 5
let c=1;
do{
    console.log("c=",c);
    c++;
} while(c<=5);

//for of loop

let str="java";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++
}
console.log("length of a string",size);

//for in loop used in accessing the object
let student={
    name: "Nilaj",
    cgpa:9.34,
    age:26,
    ispass: true,
};
for(let key in student){
    console.log("key=",key,"value =",student[key]);   
}

//Q1 print all even numbers 0 to 100

num=100;
for(let i=0;i<=num;i++){
    if(i%2==0){
        console.log("i=",i)
    }
}
// print all odd numbers 0 to 5
num=5;
for(let i=0;i<=num;i++){
    if(i%2!==0){
        console.log("i=",i)
    }
}


//Q2 
let gnum=25;
let usernum=alert("Guess the game number");
while(usernum!=gnum){
    usernum=prompt("You enter Wrong number.Guess Again");
}
console.log("Congratulation You Enterted Correct number");
