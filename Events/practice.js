let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let curmode="light"//black

modeBtn.addEventListener("click",()=>{
    if(curmode==="light"){
        curmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);

})

