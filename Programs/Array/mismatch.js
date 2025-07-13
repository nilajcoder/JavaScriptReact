
/*
check string compare it to array that Hallo is differnt from Hello so return e
*/
let arr = ["hi", "Hello"];
let str = "Hallo";

for (let word of arr) {
  if (word.length === str.length) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== str[i]) {
        console.log(word[i]); // This is the mismatching character from the array
        break;
      }
    }
  }
}


