import {Link} from "react-router-dom";
import "./Footer.css";
import {company} from "../../data/company";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <strong>{company.name}</strong><br/>
                    {company.street}<br/>
                    {company.zip + " " + company.city}
                </div>
                <div>
                    Tel.: <a href={"tel:" + company.phone} target="_blank">+43 664 3336271</a><br/>
                    E-Mail: <a href={"mailto:" + company.email} target="_blank">karl.zorn@aon.at</a>
                </div>

                <nav aria-label="Rechtliches">
                    <Link to="/Kontakt">Kontakt</Link>
                    <Link to="/Impressum">Impressum</Link>
                </nav>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Zorn Baukran GmbH</p>
        </footer>
    );
}

export default Footer;