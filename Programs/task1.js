



/*
1. Remove the Middle Elements
Given: const arr = [10, 20, 30, 40, 50, 60];
*/
const arr = [10, 20, 30, 40, 50, 60];
arr.splice(2, 1); // remove 2 elements starting from index 2
console.log(arr); // [10, 20, 50, 60]



/*
2. Split Array into Two Halves
*/

const arr1 = [10, 20, 30, 40, 50, 60];
const mid = (arr1.length / 2);

const firstHalf = arr1.slice(0, mid);
const secondHalf = arr1.slice(mid);

console.log(firstHalf);  // [10, 20, 30]
console.log(secondHalf); // [40, 50, 60]

/*
3. Find the First Duplicate
Given: const nums = [1, 3, 4, 2, 3, 5, 6];
*/



const nums = [1, 3, 4, 2, 3, 5, 6];

const dup=nums.find((num,index)=>nums.indexOf(num)!==index);
console.log(dup)




/*

4. const scores = [
  { name: "A", marks: 90 },
  { name: "B", marks: 60 },
  { name: "C", marks: 75 },
  { name: "D", marks: 95 }
];
Task:
Use filter() to get students with marks ≥ 80.
Use map() to return a string like: "A (90 marks)", "D (95 marks)
*/
const scores = [
{ name: "A", marks: 90 }, 
    { name: "B", marks: 60 },
    { name: "C", marks: 75 },
        { name: "D", marks: 95 }
];
const filtered = scores.filter(scores => scores.marks >= 80);
const mapped = filtered.map(scores=> `${scores.name} (${scores.marks} marks)`);
console.log(filtered);
console.log(mapped);



/*

5. Find Student Who Failed
 
Given:
const results = [
  { name: "Tom", marks: 85 },
  { name: "Jerry", marks: 33 },
  { name: "Spike", marks: 55 }
];
*/

const results = [
 { name: "Tom", marks: 85 },
 { name: "Jerry", marks: 33 },
 { name: "Spike", marks: 55 }
];
const findFailedStudents = results.filter(results=>results.marks<40)
console.log(findFailedStudents)


/*

6. Array Of Object Name Age
>=18 adult 
*/


const names=[

    {name: "Puja",age:10},
    {name :"Shalini",age:20},
    {name :"Swagata",age:25}
];

const adult = names.filter(p=>p.age>=18).map(p=>p.name)
console.log(adult);


/*
Diff between Find Filter Map

*/