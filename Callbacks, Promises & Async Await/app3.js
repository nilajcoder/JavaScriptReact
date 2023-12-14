
/*
Async-Await
--------------
async funtion always returns promise
await pauses the execution of its surroundings async funtion until 
the promise is settled.

*/


async function hello(){
    console.log("Hello");
}



function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Weather Data");
        resolve(200);
       },5000)
    });
}

async function getweatherData(){
    await api();//1st call
    await api();//2nd call
}



//Async-await Example
function GetData(id){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",id);
            resolve("success");
         
        },5000);
    });
}

//Async-Await
async function GetAllData(){
    console.log("Getting data 1....")
    await GetData(1);
    console.log("Getting data 2....")
    await GetData(2);
    console.log("Getting data 3....")
    await GetData(3);
}

/*
IIFE-Immediately invoked Function Expression
IIFE is a function that is called immediately invoked as soon as it is defined
*/

(async function (){
    console.log("Getting data 1....")
    await GetData(1);
    console.log("Getting data 2....")
    await GetData(2);
    console.log("Getting data 3....")
    await GetData(3);
})();