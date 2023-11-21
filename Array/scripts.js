//Array
/*
Collection Of items
*/
let marks=[27,56,98,65,87,60];
let sum=0;
for(let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(`Sum of the marks=${sum}`);
console.log(`Average of marks=${avg}`);

//Arrays in loops
let cities=["Delhi","Kolkata","Pune","Bangalore"];
for (let city of cities){
    console.log(city)
}


//Q2
let items=[65,98,78,63,21,56];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);


//push this method add the items in last index
let fooditems=["potato","apple","litchi"];
console.log("Before Push =",fooditems);
fooditems.push("chips");
console.log(" After push Food items are =",fooditems);

//pop this method delete from end
let fitems=["potato","apple","litchi"];
console.log("Before pop =",fitems);
let del=fitems.pop();
console.log(" After pop Food items are =",fitems);
console.log("Deleted item is=",del)


//ToString coverts the array to string
let cgpa=[8,9,7,8.3,7.5];
console.log("Array is=",cgpa);
console.log("Converted into String=",cgpa.toString());


//concat Array
let marvel=["Thor","Ironman","Spiderman"];
let dc=["Batman","Superman","Wonder Woman"];
console.log("marvel=",marvel);
console.log("dc=",dc);
let hero=marvel.concat(dc);
console.log("After Concat =",hero);

//unshift add to start
//shift   delete from start
let ab=[1,2,3,5];
console.log("Before unshift",ab);
let b=ab.unshift(9);
console.log("After unshift",ab);
let c=ab.shift();
console.log("After Shift=",ab);


//slice 
let bc=[1,2,3,4,5];
console.log("Array=",bc);
console.log(bc.slice(1,2));

//splice add delete replace the element
let arr=[5,6,9,8,3];
console.log("Array is",arr);
arr.splice(2,0,10);// add 2 is index 0 deleted item 10 inserted item
console.log("after Insertion=",arr);
arr.splice(3,1)//delete 3 is index no  1 number of deletion
console.log("After Deletion=",arr);
arr.splice(4,1,11);//replace 4 index no  1 number of deletion 11 inserted instead of
console.log("After Replace",arr);

//Practice 1
let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Companies",company);

//Remove first Company From Array

console.log("Delete the First Company=",company.shift());//delete from start
console.log("After deletion",company);

//Remove Uber & add Ola (replace)

company.splice(1,1,"Ola") // 1 is index no 1 deleted "Ola" is added 
console.log("After Replacement of Uber added item is Ola",company);

//Add "Amazon" at the end
company.push("Amazon");
console.log("After Pushing at the end",company);