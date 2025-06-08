
import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
     const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        if (!emailRegex.test(email)) {
            setError("Invalid email");
        } else if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters with letters and numbers");
        } else {
            setError("");
            alert("Login successful!");
            console.log("Email:", email);
            console.log("Password:", password);
              navigate("/dashbord");
        }
    }
    return (
        <div>

            <h2>Login</h2>
            <form >
                <input
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
             <p>Don't have an account? <Link to="/register">Register</Link></p>

        </div>
    )
}

export default Login
