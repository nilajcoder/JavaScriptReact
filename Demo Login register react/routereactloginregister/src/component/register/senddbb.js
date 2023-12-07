import axios from "axios";

function SendDbb(pay){
    var url='http://localhost:8080/register'

    axios.post(url,pay).then((res)=>{
        console.log(res.data);
    })
}
export default SendDbb;
