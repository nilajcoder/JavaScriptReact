import { useState } from "react";
import './slid.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      {isOpen && (
        <ul>
          <li>BatMan</li>
          <li>SuperMan</li>
          <li>Wonder Woman</li>
          <li>AquaMan</li>
          <li>Justice League</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;