import React from "react";
import  Button  from "react-bootstrap/Button";
import SendDb from "./senddbb"
function Register(){
    function registersucces(){
        var pay={
            
                "id": 0,
                "email": document.getElementById('email').value,
                "crepassword": document.getElementById('pwd').value,
                "password": document.getElementById('passs').value,
                "mobileno": document.getElementById('mob').value
              
        }
        SendDb(pay);
    }

    
    return(
        <>
            <div>
            <label>Email:</label><input type="textbox" id="email"></input>
            </div>
            
            <div>
            <label>Create Password:</label><input type="password" id="pwd"></input>
            </div>
            <div>
            <label>Confirm Password:</label><input type="password" id="passs"></input>
            </div>
            <div>
            <label>Mobile number:</label><input type="textbox" id="mob"></input>
            </div>
            <div>
            <Button variant="warning">Cancel</Button>
            <button onClick={registersucces} className='btn btn-primary btn-sm'>Register</button>
            </div>
        </>
    );
}
export default Register;
