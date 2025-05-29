

/*

 

 

 
 
*/



/*
1. 
const baseProfile = {
  id: 101,
  name: "Neha",
  preferences: {
    theme: "light",
    language: "English"
  }
};
 
const updatedPreferences = {
  preferences: {
    theme: "dark",
    fontSize: "medium"
  }
};


/ TASK: Merge both objects so that the final object:
// - Keeps id and name
// - Merges preferences where updatedPreferences overrides
// - Expected Output:
{
  id: 101,
  name: "Neha",
  preferences: {
    theme: "dark",
    language: "English",
    fontSize: "medium"
  }
}
*/

const baseProfile = {
id: 101,
 name: "Neha",
 preferences: {
 theme: "light",
 language: "English"
 }
};

const updatedPreferences = {
 preferences: {
 theme: "dark",
fontSize: "medium"
}
};

// Merge the objects
const finalProfile = {
  ...baseProfile,
  preferences: {
    ...baseProfile.preferences,
    ...updatedPreferences.preferences
  }
};

console.log(finalProfile);



/*

2.

const student = {
  name: "Aman",
  age: 21,
  course: "B.Tech",
  city: "Delhi",
  email: "aman@example.com"
};
 
//  TASK: Write a function printStudent that:
// - Destructures name and age directly in the function parameters
// - Collects the rest of the properties into another object
// - Logs:
//   - Name and age
//   - Then logs the rest object
*/


const student = {
  name: "Aman",
  age: 21,
  course: "B.Tech",
  city: "Delhi",
  email: "aman@example.com"
};

function printStudent({ name, age, ...rest }) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Other Details:", rest);
}

printStudent(student);



/*

3.

const employee = {
  id: 2001,
  name: "Ravi",
  salary: 50000,
  department: "HR",
  location: "Pune"
};
 
//  TASK:
// - Extract id and name
// - Put the remaining fields in another object called jobInfo
id: 2001
name: "Ravi"
jobInfo: { salary: 50000, department: "HR", location: "Pune" }
*/


const employee = {
  id: 2001,
  name: "Ravi",
  salary: 50000,
  department: "HR",
  location: "Pune"
};

const { id, name, ...jobInfo } = employee;

console.log("id:", id);
console.log("name:", name);
console.log("jobInfo:", jobInfo);



/*


4.

const users = [
  { name: "A", password: "123", email: "a@mail.com" },
  { name: "B", password: "456", email: "b@mail.com" },
  { name: "C", password: "789", email: "c@mail.com" }
];
 
// TASK:
// - Remove the password field from each user using destructuring and rest
// - Create a new array publicUsers without passwords
*/


const users = [
  { name: "A", password: "123", email: "a@mail.com" },
  { name: "B", password: "456", email: "b@mail.com" },
  { name: "C", password: "789", email: "c@mail.com" }
];

const publicUsers = users.map(({ password, ...rest }) => rest);

console.log(publicUsers);
