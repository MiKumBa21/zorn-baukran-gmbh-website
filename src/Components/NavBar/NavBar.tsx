import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to={"/"} className="nav-link">Start</Link>
            </li>
            <li className="nav-item dropdown">
                <Link to={"/cranes"} className="nav-link dropdown-toggle">Krane</Link>
                <ul className="dropdown-menu">
                    <li><Link to={"/cranes/constcranes"} className="dropdown-item">Baukrane</Link></li>
                    <li><Link to={"/cranes/quickerectcranes"} className="dropdown-item">Schnellmontagekrane</Link></li>
                    <li><Link to={"/cranes/mobilcranes"} className="dropdown-item"> Mobilkrane</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link to={"/eurogru"} className="nav-link">Eurogru - Partner</Link>
            </li>
            <li className="nav-item">
                <Link to={"/usedcranes"} className="nav-link">Gebraucht Krane</Link>
            </li>
            <li className="nav-item">
                <Link to={"/contact"} className="nav-link">Kontakt</Link>
            </li>
        </ul>
    );
}
export default NavBar;