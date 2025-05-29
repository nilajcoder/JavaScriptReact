




/**
 * const obj1 = {
  user: { name: 'Alice', age: 25 },
  isAdmin: false
};
 
const obj2 = {
  user: { age: 30 },
  isAdmin: true
};
 
// Expected output:
{
  user: { name: 'Alice', age: 30 },
  isAdmin: true
}
 */
/* 
Spread operator
*/

const obj1 = {
 user: { name: 'Alice', age: 25 },
 isAdmin: false
};

const obj2 = {
     user: { age: 30 },
   isAdmin: true
};

// Merging obj1 and obj2
const merged = {   

    ...obj1,...obj2,
    user:{
        ...obj1.user,
        ...obj2.user
    }
};

console.log(merged)

/*

Destrcturing


//Array destructuring
let arr = [1, 2, 3];

// Destructuring the array into variables
let [a, b, c] = arr;

console.log(a);  // Output: 1
console.log(b);  // Output: 2
console.log(c);  // Output: 3



const user = {
  name: 'Sarah',
  age: 28,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

*/

const user = {
 name: 'Sarah',
 age: 28,
 address: {
city: 'New York',
zip: '10001'
 }
};

const{name ,age,address:{city}}=user

console.log(name)
console.log(age)
console.log(city)


/*

const obj1 = {
  user: {
    name: 'Alice',
    details: { age: 25, city: 'Delhi' }
  }
};
 
const obj2 = {
  user: {
    details: { city: 'Mumbai', country: 'India' }
  }
};
 
// Expected Output:
{
  user: {
    name: 'Alice',
    details: {
      age: 25,
      city: 'Mumbai',
      country: 'India'
    }
  }
}
*/


const obj3 = {
 userone: {
nameone: 'Alice',
details: { ageone: 25, cityone: 'Delhi' }
 }
};

const obj4 = {
userone: {
details: { cityone: 'Mumbai', country: 'India' }
 }
};





const mgr={
    ...obj3.userone,
    
    userone:{
        ...obj3.userone.details,
        ...obj4.userone.details
    }
};

console.log(mgr)