/*

Array(2):

When you pass a single numeric argument to the Array constructor, it creates an array 
with that length but does not initialize the elements. The array will have "empty slots."
Example: Array(2) creates an array with a length of 2, 
but it has no values, resulting in [ , ]. These "empty slots" are different from undefined.


1.
console.log(Array(1, 2));  // [1, 2]
console.log(Array(2));     // [ , ]


2.
console.log(typeof(NaN))
console.log(NaN)
console.log(NaN==4)
console.log(NaN=="4")
console.log(NaN!=4)
console.log(NaN==true)
console.log(NaN==false)

output

number
NaN
false
false
true
false
false


In JavaScript, NaN stands for "Not-a-Number," 
and it is a special value used to represent invalid or undefined numerical
 results. The key point here is that NaN is a falsy value


 3. if (NaN) {
    console.log("i am there")
} else {
    console.log("i am not there")
}

output
i am not there
*/


