import { useState } from 'react';
import profilePic from '../assets/bat.jpg';

function CardBat() {
  const [isDark, setIsDark] = useState(false);



  return (
    <div
      className="card" >
      <img
        className="card-image"
        src={profilePic}
        alt="profile picture"
        style={{
          width: '100%',
          borderRadius: '8px',
          border: isDark ? '2px solid #444' : '2px solid #ddd',
        }}
      />
      <h2 className="card-title" style={{ margin: '10px 0' }}>BatMan</h2>
      <p>DC Universe</p>

     
    </div>
  );
}

export default CardBat;
