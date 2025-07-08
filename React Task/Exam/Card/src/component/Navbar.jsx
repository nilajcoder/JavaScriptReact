import React, { useEffect, useState } from 'react'

const Navbar = () => {

   const [isDark, setIsDark] = useState(false);
  
     const toggleTheme = () => {
      setIsDark(!isDark);
    };

    
  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);


  return (
    <div>

      

           <nav style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      fontSize: '1.2rem'
    }}>

      <button onClick={toggleTheme} className="toggle-button">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      Superhero Dashboard

      
    </nav>
      
    </div>
  )
}

export default Navbar
