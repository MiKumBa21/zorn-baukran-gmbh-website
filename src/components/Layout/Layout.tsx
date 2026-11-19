import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import "./Layout.css";

export default function Layout() {
    return (
        <div className="layout">
            <ScrollToTop />
            <a href="#main" className="skip-link">Zum Inhalt springen</a>
            <Header />
            <main id="main" className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}