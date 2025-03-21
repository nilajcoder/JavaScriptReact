import React from "react";
import './App.css';
import { useState } from "react";

function App() {

     const [color, setColor] = useState("Red");

    const changeColor = () => {
        setColor("Blue");
        
        
    }
    return (

        <>
        <h1>My fav color is {color}</h1>
        <button onClick={changeColor}>Blue </button>
        
        </>
    )

}
export default App;
