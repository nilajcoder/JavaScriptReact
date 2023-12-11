const student = {
 FullName: "Nilaj Chakraborty",
 Marks: 94.3,
 printMarks: function(){
    console.log("Marks =",this.Marks)
 }

};


const employee = {
    calculateTax(){
      console.log("Tax rate is 10%");
    }

};

const KaranArjun ={
    salary: 50000
};

const RahulRaj ={
    salary: 60000,
    calculateTax(){
        console.log("Tax rate is 20%");
      }
}

KaranArjun.__proto__=employee;
RahulRaj.__proto__=employee;



class ToyotaCar{
 constructor(brand,milege){
    console.log("New object created");
    this.brand=brand;
    this.milege=milege;
 }

    start(){
        console.log("Start");

    }

    stop(){
        console.log("Stop");
    }
    
}
let fortuner=new ToyotaCar("fortuner",10);
console.log(fortuner)
let lexus=new ToyotaCar("Lexus",20);
console.log(lexus);



class Parent{
    hello(){
        console.log("Hello")
    }
}

class Child extends Parent{

}

let obj=new Child();




class Person{
    constructor(name){
      
        this.species="Homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("Eat");
    }
}

    class Engineer extends Person{
        constructor(name){
            
            super(name);//to invoke parent class constrctor()
         
        }
        work(){
           console.log("Solving Problem"); 
        }
    }

    let engobj=new Engineer("Nilaj Chakraborty");
   
 //PQ  2
 let DATA = "Secret Information";

 class User {
     constructor(name, email) {
         this.name = name;
         this.email = email;
     }
 
     viewData() {
         console.log("Data =", DATA);
     }
 }
 
 class Admin extends User {
     constructor(name, email) {
         super(name, email);
     }
 
     edit() {
         DATA = "new data";
     }
 }
 
 let student1 = new User("Nilaj", "nilaj@email.com");
 console.log(student1.viewData());
 
 let student2 = new User("Samadrita", "sam@email.com");
 console.log(student2.viewData());
 
 let admin1 = new Admin("admin1", "admin1@admin.com"); // Creating an instance of Admin
 admin1.edit(); // Now you can call the edit method on admin1
 console.log(admin1.viewData()); // This will show the updated data
 




//try catch 
let a=5;
let b=10;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
try{
    console.log("a+b =",a+c);//error
} catch(err){
  console.log(err);
}

console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);

