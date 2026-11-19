import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <strong>Zorn Baukran GmbH</strong><br />
                    Gewerberstraße 5<br />
                    4551 Ried im Traunkreis
                </div>
                <div>
                    Tel.: <a href="tel:+436643336271">+43 664 3336271</a><br />
                    E-Mail: <a href="mailto:karl.zorn@aon.at">karl.zorn@aon.at</a>
                </div>
                <nav aria-label="Rechtliches">
                    <Link to="/Kontakt">Kontakt</Link>
                    <Link to="/Impressum">Impressum</Link>
                    <Link to="/Datenschutz">Datenschutz</Link>
                </nav>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Zorn Baukran GmbH</p>
        </footer>
    );
}
export default Footer;