import React from "react";
import { Outlet } from "react-router-dom";
import SendDb from "./senddb";

function Login() {
  function loginsucces() {
    var payload = {
      "id": 0,
      "email": document.getElementById('users').value,
      "password": document.getElementById('pass').value
    }
    SendDb(payload);
  }

 
  return (
    <>
      <h2>Login form</h2>
      <div className="cont container-fluid">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" >Email</label>
            <input type="text" className="form-control" id="users" aria-describedby="emailHelp" />
            <small id="user" className="form-text text-muted">We'll never share your userId with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="pass" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button onClick={loginsucces} className='btn btn-primary btn-sm'>submit</button>
        </form>
      </div>
      <Outlet />
    </>
  );
}


export default Login;
