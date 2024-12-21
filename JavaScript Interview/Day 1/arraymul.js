

/*
acc   curr
1  * 2       2
2  * 3       6
6*   4       24
and so on

*/


const arr = [1, 2, 3, 4, 5, 6]

const result = arr.reduce((acc, curr) => acc * curr)
                                                         
console.log(result)//720   
