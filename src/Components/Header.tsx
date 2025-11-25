import NavBar from './NavBar'
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header-container">
                <img src="src/assets/logo_gelb.jpg" alt="Logo" className='header-img' />
                <NavBar />
            </div>


        </header>
    );
}
export default Header;