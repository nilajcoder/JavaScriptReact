
// for..in loop
// The for..in loop is used to iterate over the properties of an object.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let i in person) {
    console.log(person[i]);
}


// for..of loop
// The for..of loop is used to iterate over iterable objects like arrays, strings, etc.
var numbers = [1, 2, 3];
var sum = 0;
for (let i of numbers) {
    //console.log();
        sum += i;

}
console.log("Sum is " + sum);