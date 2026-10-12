import "./NavBar.css"
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className="nav-container">
            <button className="nav-toggle" aria-label="toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                <span className="hamburger">≡</span>
            </button>
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">Start</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to={"/Krane"} className="nav-link dropdown-toggle">Krane</Link>
                    <ul className="dropdown-menu">
                        <li><Link to={"/Krane/Baukrane"} className="dropdown-item">Baukrane</Link></li>
                        <li><Link to={"/Krane/Schnelleinsatzkran"} className="dropdown-item">Schnellmontagekrane</Link></li>
                        <li><Link to={"/Krane/Mobilkran"} className="dropdown-item"> Mobilkrane</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to={"/Eurogru"} className="nav-link">Eurogru - Partner</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Gebrauchte-Krane"} className="nav-link">Gebraucht Krane</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Kontakt"} className="nav-link">Kontakt</Link>
                </li>
            </ul>
        </div>

    );


}
export default NavBar;