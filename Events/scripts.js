let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
}

let div1=document.querySelector("div1");

div1.onmouseover=()=>{

    console.log("You are inside box 2");


}


//let btn2=document.querySelector("#btn2");
//btn2.onclick=(evt)=>{
   // console.log(evt);//event object
   // console.log(evt.type);
   // console.log(evt.target);
    
   
//}

btn2.addEventListener("click",()=>{
    console.log("Button 2 was clicked - 1");

});

btn2.addEventListener("click",()=>{
    console.log("Button 2 was clicked - 2");

});

const hand3=()=>{
    console.log("Button 2 was clicked - 3");

};

btn2.addEventListener("click",hand3);
btn2.removeEventListener("click",hand3);