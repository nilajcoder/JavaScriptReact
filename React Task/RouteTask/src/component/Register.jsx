import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); //

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!name.trim()) {
            setError("Name is required");
        } else if (!emailRegex.test(email)) {
            setError("Invalid email format");
        } else if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters with letters and numbers");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
            alert("Registration successful!");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Password:", password);
              navigate("/login"); // ✅ redirect to dashboard

            // Clear form
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }
    return (
        <div>


            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />

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

                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /><br /><br />

                <button type="submit">Register</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
             <p>Already have an account? <Link to="/login">Login</Link></p>

        </div>
    )
}

export default Register
