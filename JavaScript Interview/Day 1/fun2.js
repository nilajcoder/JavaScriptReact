/*


The code demonstrates the use of a higher-order function and function chaining.
*/



function abc(){
    return function(){
        console.log("Rahul")
    }
}

console.log(abc()())//rahul undefined

//abc()() rahul
