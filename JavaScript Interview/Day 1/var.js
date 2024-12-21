const c = {
    name: "rahul"
}

const d=c; //adrees object will be copied there 
c.name = "kumar"
console.log(d.name)//kumar
