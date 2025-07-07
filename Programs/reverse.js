

/*
let str="arjun"
let revstr=str.split("").reverse().join("")

console.log(revstr)//nurja

*/

/*
let str="I am arjun"
let revstr=str.split(" ").reverse().join(" ")

console.log(revstr)
*/


let str="arjun"
let revstr=""
for(let i=str.length-1;i>=0;i--){
    revstr+=str[i]
}

console.log(revstr)//nurja



console.log(null==undefined)//true

console.log(null===undefined)//false