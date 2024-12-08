// Navbar.js
import NavbarDropdown from './NavDropdown';
import "../css/nav.css";
function Navbar() {
    return (
        <div className="navbar">
            <p>NAVBAR</p>
            <div className="nav-items">
                <div className="notification">
                    <NavbarDropdown/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
