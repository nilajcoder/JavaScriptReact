
/*
Callback hell Example
 Callback hell-Nested Callback stacked below one another formimg
                 pyramid structure
*/
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
         getNextData();
        }
        
    },2000);
}

getData(1,()=>{
    getData(2,()=>{
     getData(3);
    });
})


/*
Promises:-Callback hell is complex to understand thats why Promises are used
Promise is eventual task.It is an object in js . it is a soloution of
 callback hell. 

*/
//pending
let promise2=new Promise((resolve,reject)=>{
    console.log("I am a pending promisses");
});
//resovle
let promise=new Promise((resolve,reject)=>{
    console.log("I am a resolve promisses");
    resolve("success");
    
});
 
//reject
let promise1=new Promise((resolve,reject)=>{
    console.log("I am a reject promisses");
    reject("some error");   
});


/*
Example of Promises
*/

function GetData(id,nextdata){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",id);
            resolve("success");
            if(nextdata){
                nextdata();
            }
        },10000);
    } );

}

const getPromises=()=>{
   return  new Promise((resolve,reject)=>{
        console.log("I am a promises");
       resolve("success");
       //reject("error")
    });
};

let val=getPromises();
val.then((res)=>{
    console.log("Promise Fulfilled",res);
});

val.catch((err)=>{
    console.log("rejected",err);
})


