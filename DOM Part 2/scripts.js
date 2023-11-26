let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);


let para=document.querySelector("p");
//console.log(para.setAttribute("class","new para"));
para.remove();



let btn=document.createElement("button");
btn.innerText="click me";
console.log(btn);

let div1=document.querySelector("div");
div.append(btn);
div.prepend(btn);
div.before(btn);
div.after(btn);

