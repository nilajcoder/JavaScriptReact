
/*
Empty the array  splice method

*/
const arr=[1,2,3]
arr.splice(0,arr.length)
console.log(arr)//[]



/*
Map Method- return the new array with modication
*/
const a=[1,2,3]
const b=a.map((n)=>n*2)
console.log(b)//[2,4,6]


/*
Reduce method- return single value
*/
const x=[1,2,3]
const y=x.reduce((acc,num)=>acc*num)
console.log(y)//6


/*
Filter Method-Return the new array to filter
*/

const p=[1,2,3]
const q=p.filter(item=>item>1)
console.log(q)//[2,3]


/*
Replace method New Line
*/
const abc="Hello World"
const xyz=abc.replace(" ","\n")
console.log(xyz)

/*
Output

Hello
World
*/

/*

Find method to find a specific value
*/
const v=[1,2,3]
const vb=v.find(num=>num>2)
console.log(vb)//3


/*

*/
function infiniteocc(val1){
    return function(val2){
        if(!val2){
            return val1
        }
        return infiniteocc(val1+val2)
    }
}
console.log(infiniteocc(1)(2)())

/*
Sort 
*/
let ar = [1, 9, 5, 2, 65, 6];
arr.sort((a, b) => a - b); // Sort in ascending order
console.log(ar); // Output: [1, 2, 5, 6, 9, 65]


let xy = [1, 9, 5, 2, 65, 6];
arr.sort((a, b) => b - a); // Sort in descending order
console.log(xy); // Output: [65, 9, 6, 5, 2, 1]
