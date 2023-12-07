import axios from "axios";

function SendDb(payload){
    var url='http://localhost:8080/login'

    axios.post(url,payload).then((res)=>{
        console.log(res.data);
    })
}
export default SendDb;
