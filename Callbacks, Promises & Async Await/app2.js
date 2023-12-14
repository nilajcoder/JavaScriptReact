//promise Chaining
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       console.log(" data 1");
       resolve("Success Data");
      },4000)
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       console.log(" data 2");
       resolve("Success Data");
      },4000)
    });
}
console.log("Fetching Data 1...........");
asyncFunc1().then((res)=>{
    console.log(res);
console.log("Fetching Data 2...........");
asyncFunc2().then((res)=>{
    console.log(res);
});

});


//promise chaining example
function GetData(id,nextdata){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",id);
            resolve("success");
         
        },10000);
    });
}

GetData(1).
then((res)=>{
 return GetData(2);
})
 .then((res)=>{
    return GetData(3);
  })
  .then((res)=>{
    console.log(res);
  })
