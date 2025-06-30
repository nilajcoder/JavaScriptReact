


/*

 Difference between == and ===?

    == checks for value equality, while === checks for both value and type equality.
    == will perform type coercion if the types are different, while === will not.
*/


console.log(1 == "1") // true
console.log(1 === "1") // false


console.log(typeof NaN ==="number")//true



let a=["1","2","3"]
console.log(a.indexOf("2"))