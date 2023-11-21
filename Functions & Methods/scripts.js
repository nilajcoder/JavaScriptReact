// Funtion
/*
Block Of code that performss a specific task,can be invoked whenever needed
*/
//1
function myfun(msg){ // one parameter
   console.log(msg);
}
myfun("I Love Js");
//2
function Hifun(){ //zero param
   console.log("Hii JS");
}
Hifun();

//Funtion -> add two numbers

function sum(x,y){
   s=x+y;
   return s;
}
let va=sum(4,7);
console.log("sum of two numbers =",va);

/*Arrow funtion
 Compact way of writing a funtion
*/
const arrowmul=(a,b)=>{
   return a*b;
};
let mul=arrowmul(5,4);
console.log("Multiplication of Number=",mul);


//vowel count

function vowelcount(str){
   let count=0;
   for(const char of str){
      if(
         char=="a"||
         char=="e"||
         char=="i"||
         char=="o"||
         char=="u"

      ){
         count++
      }
   }
 return count;
}
let re=vowelcount("vowel");
console.log("Number of vowel=",re);

//vowel count using arrow funtion
const countvow=(str)=>{
   let count=0;
   for(const char of str){
      if(
         char=="a"||
         char=="e"||
         char=="i"||
         char=="o"||
         char=="u"

      ){
         count++
      }
   }
 return count;
};
let r=countvow("aeiou");
console.log("Number of vowel=",r);


//for each loop in array
//it is also called higher order funtion(funtion as a parametre or funtion return)
 let arr=["delhi","Mumbai","Kolkata"];
 arr.forEach((val,idx,arr)=>{
     console.log(val.toUpperCase(),idx,arr);
 });

 //PQ
 let nums=[2,5,6,8];
 console.log("values=",nums);
 let calSquere=(nums)=>{
    console.log("Squere of each value",nums*nums);
 };
 nums.forEach(calSquere);


 //Map methods in array
 let num=[5,6,2,9];
 console.log("Numbers are",num);
 let newarr=num.map((val)=>{
   return val*2;
 });
 console.log("Each numbers multiplied by 2= ",newarr);


 //filter method in array 
 /*
 Print the even & odd values in given array
 */
let v=[1,2,3,4,5,6,7,8];
console.log("Values are",v);
let evenarr=v.filter((vt)=>{
   return vt%2==0;
});
let oddarr=v.filter((vt)=>{
   return vt%2!==0;
});
console.log("Even values are",evenarr);
console.log("Odd values are",oddarr);


/*
Reduce Method in array
Sum of each value in given array
Find the biggest value in array
Find the smallest value in array
*/
let barr=[1,3,2,5];
console.log("Values are",barr);

const output=barr.reduce((prev,curr)=>{
     return prev+curr;
});
const big=barr.reduce((prev,curr)=>{
   return prev>curr? prev:curr;
});

const small=barr.reduce((prev,curr)=>{
   return prev<curr? prev:curr;
});
console.log("Sum Of array values",output);
console.log("Biggest value is=",big);
console.log("Smallest value is=",small);


//PQ
let marks=[97,64,32,49,99,96,86];
console.log("Marks =",marks)
let topper=marks.filter((val)=>{
     return val>90;
});
console.log("Students Got 90+ marks",topper);



//PQ
let n=prompt("Enter a number");
let no=[];
for(let i=1;i<=n;i++){
   no[i-1]=i;
}
console.log("Array elements are=",no);

const sumarr=no.reduce((res,curr)=>{
   return res+curr;
});

const product=no.reduce((res,curr)=>{
   return res*curr;
});
console.log("Sum of all numbers in array",sumarr);
console.log("Product of all numbers in array(Factorial)",product);