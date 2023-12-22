/*
                Fetch API
                ----------
API- Application Programming Interface

The Fetch API provides an interface for fetching(Sending/receiving)
 resources.
 It uses Request and Response objects.
 The fetch() method is used to fetch a resource(data)

 let promise=fetch(url,[option]);

*/

/*
Terms
---------
AJAX is Asynchronous JS & XML
JSON is JavaScript Object Notation 
json() method :returns a second promise that resolves with the result of parsing the response body text as JSON.
*/

const URL="https://cat-fact.herokuapp.com/facts";// It is an  readymade API URL
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts=async()=>{
     console.log("Getting data ...");
    let respose=await fetch(URL);
    console.log(respose);
    console.log(respose.status);//status of the api
    let data=await respose.json();//JSON FORMAT
    console.log(data);
    console.log(data[0].text);
    factPara.innerText=data[0].text;
};
//promise chaining
function GetFacts(){
    fetch(URL).then((response)=>{
  return response.json();
    }).then((data)=>{
        console.log(data);
        factPara.innerText=data[2].text;
    });
}


btn.addEventListener("click",getFacts);
btn.addEventListener("click",GetFacts);


/*

HTTP Verbs :Hyper Text Transfer Protocol
Response Status Code 
*/