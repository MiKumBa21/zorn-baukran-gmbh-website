import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <nav className="nav-container" aria-label="Hauptnavigation">
            <button
                type="button"
                className="nav-toggle"
                aria-label="Navigation umschalten"
                aria-expanded={isOpen}
                aria-controls="main-menu"
                onClick={() => setIsOpen((o) => !o)}
            >
                <span className="hamburger" aria-hidden="true">≡</span>
            </button>

            <ul id="main-menu" className={`nav-list ${isOpen ? "open" : ""}`}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={close}>Start</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to="/Krane" className="nav-link dropdown-toggle" onClick={close}>Krane</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/Krane/Baukrane" className="dropdown-item" onClick={close}>Baukrane</Link></li>
                        <li><Link to="/Krane/Schnelleinsatzkran" className="dropdown-item" onClick={close}>Schnellmontagekrane</Link></li>
                        <li><Link to="/Krane/Mobilkran" className="dropdown-item" onClick={close}>Mobilkrane</Link></li>
                    </ul>
                </li>
                <li className="nav-item"><Link to="/Eurogru" className="nav-link" onClick={close}>Eurogru - Partner</Link></li>
                <li className="nav-item"><Link to="/Gebrauchte-Krane" className="nav-link" onClick={close}>Gebrauchte Krane</Link></li>
                <li className="nav-item"><Link to="/Kontakt" className="nav-link" onClick={close}>Kontakt</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar;