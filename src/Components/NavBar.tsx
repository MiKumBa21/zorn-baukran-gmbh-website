import './NavBar.css';

function NavBar() {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link" href="/">Start</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Krane</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Baukrane</a></li>
                    <li><a className="dropdown-item" href="/">Schnellmontagekrane</a></li>
                    <li><a className="dropdown-item" href="/">Mobilkrane</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.eurogru.de/start.html" target='_blank'>Eurogru - Partner</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Gebraucht Krane</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Kontakt</a>
            </li>
        </ul>
    );
}
export default NavBar;