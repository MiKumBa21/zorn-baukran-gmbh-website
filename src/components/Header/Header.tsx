import NavBar from '../NavBar/NavBar'
import './Header.css'
import Logo from '../../assets/Images/Logo/logo_gelb.jpg'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="header-container">
            <div className="header-inner">
                <Link to="/" className="header-logo-link">
                    <img src={Logo} alt="Zorn Baukran Logo" className="header-logo" />
                </Link>
                <NavBar />
            </div>
        </header>
    );
}
export default Header;