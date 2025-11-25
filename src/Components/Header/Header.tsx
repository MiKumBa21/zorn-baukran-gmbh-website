import NavBar from '../NavBar/NavBar'
import './Header.css';
import Logo from '../../assets/logo_gelb.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-container">
                <Link to={"/"}><img src={Logo} alt="Logo" className='header-img' / ></Link>
            <NavBar />
        </div>


        </header >
    );
}
export default Header;