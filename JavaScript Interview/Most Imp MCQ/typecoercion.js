
// Arithemetic
console.log(1 + 1)//2
console.log(1 - 1)//0
console.log(5 * 2)//10
console.log(4 / 2)//2
console.log(5 ** 2)//25


//String +  - * /  Number/String
console.log("5" + 2)//52//string
console.log(1 + "2") //12 string
console.log("1" + "2")//12 string
console.log("str" + "hii")//strhii
console.log("str" + 5)//str5 string

console.log("5" - 2)//3//number
console.log(1 - "2") //-1 number
console.log("1" - "2")//-1 number
console.log("str" - "hii")//NAN
console.log("str" - 5)//NAN
console.log(5 - "g")// NAN



console.log("5" * 2)//10//number
console.log(1 * "2") //2 number
console.log("1" * "2")//2 number
console.log("str" * "hii")//NAN
console.log("str" * 5)//NAN
console.log(5 * "g")// NAN


console.log("5" / 2)//2.5//number
console.log(1 / "2") //0.5 number
console.log("1" / "2")//0.5 number
console.log("str" / "hii")//NAN
console.log("str" / 5)//NAN
console.log(5 / "g")// NAN



// Boolean

console.log(1 == true);   // true   (true → 1)
console.log(0 == false);  // true   (false → 0)
console.log(2 == true);   // false  (true → 1, 2 != 1)


// Null Undefined

console.log(null == undefined); // true (loose equality special case)
console.log(null === undefined); // false (different types)


// IF Else 
if ("") {
    console.log("yes");
}
else {
    console.log("no");
}
// "no"  (empty string is falsy)


if ("0"){

    console.log("yes");
}
else {
    console.log("no");
}
// "yes" (string "0" is truthy)


if ([]){
    console.log("yes");
}
else {
    console.log("no");
}
//[] empty array truthy value yes


if ({}){
    console.log("yes");
}
else {
    console.log("no");
}  //{} truthy value yes


if (1){
    console.log("yes");
}
else {
    console.log("no");
} //1 trure yes


if (0){
    console.log("yes");
}
else {
    console.log("no");
}  //0 false no

if (" "){
    console.log("yes");
}
else {
    console.log("no");
} // " " with space truthy value yes


if (""){
    console.log("yes");
}
else {
    console.log("no");
} // no  "" empty string false no


if (-5){
    console.log("yes");
}
else {
    console.log("no");
} // yes   


//Equality Pitfalls
console.log("0" == 0);   // true  ("0" → number 0)
console.log(false == "0"); // true (false → 0, "0" → 0)
console.log([] == "");   // true  ([] → "" → number 0, "" → 0)
console.log([] == 0);    // true  ([] → "" → 0)
console.log([1] == 1);   // true  ([1] → "1" → 1)



