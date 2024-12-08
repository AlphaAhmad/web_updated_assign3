import  { useState } from "react";
import "../css/NavDropdown.css" 
function NavbarDropdown() {
    // value to keep in check wheather the drop down is open or close
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className="nav-item">
      <button className="nav-icon" onClick={toggleDropdown}>
        <div className="position-relative">
          <span className="icon">☰</span>
        </div>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Profile 👨</li>
          <li className="dropdown-item">Sign Up</li>
          <li className="dropdown-item">Login from 192.186.1.8</li>
          <li className="dropdown-item">New connection</li>
        </ul>
      )}
    </li>
  );
}

export default NavbarDropdown;
