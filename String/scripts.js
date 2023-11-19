//String is a sequence of  characters used to represents text

let str="Java";
console.log("String is=",str);
let len=str.length
console.log("Length of String=",len);
//print the 0th index  
console.log(str[0]);

let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//Template Literals
let specialstring=`This is a template literals`;
console.log(specialstring);
console.log(typeof specialstring);

//uppercase lower case
let str1="DeVOps";
let str2=str1.toUpperCase();
console.log("Upercase =",str2);
let str3=str1.toLowerCase();
console.log("Lowercase=",str3);

//trim removes white spaces
let abc="  Java  ";
console.log(abc.trim());

//slice
let bcd="hello";
console.log(bcd.slice(0,3));

//concat
let a="Rohit";
let b=" Sharma";
let res=a.concat(b);
let c= a+b;
console.log(res);
console.log(c);


//replace
let bbc="hello";
console.log(bbc.replace("h","m"));

//char at
let acd="ilovejs";
console.log(acd.charAt(0));


//Q1
let fullname=prompt("Enter your Fullname");
let username="@"+fullname+fullname.length;
console.log(username);