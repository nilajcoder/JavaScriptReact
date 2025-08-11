// "Find all pairs of elements in the array whose sum is equal to 10, and return their indices.

const arr = [8, 1, 5, 4, 6, 11];
const ans = [];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == 10) {
            ans.push(i);
            ans.push(j);
        }
    }
}
console.log(ans);
