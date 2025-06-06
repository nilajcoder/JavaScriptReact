import React, { useState } from 'react';
import Theamechild from './Theamechild';

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeName = isDarkMode ? "Dark" : "Light";

  return (
    <div style={{
      background: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black",
      padding: "20px"
    }}>
      <h1>{themeName} Mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Theamechild themeName={themeName} /> 



      
    </div>
  );
}

export default Toggle;
