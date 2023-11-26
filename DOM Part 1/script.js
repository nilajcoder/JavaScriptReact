console.log("Document Object Model");
console.dir(document);//document
console.dir(document.body);
console.log(document.body);

let heading=document.getElementById("heading");
console.log(heading);


let headings=document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);


let paras=document.getElementsByTagName("p");
console.log(paras);


let firstele=document.querySelector("p");
console.log(firstele);

let allele=document.querySelectorAll("p");
console.log(allele);


let btn=document.querySelector("#btn");
console.dir(btn);
console.log(btn);
console.log(btn.tagName);


let div=document.querySelector("div");
console.dir(div)
console.log(div.innerText);


let h3=document.querySelector("h3");
