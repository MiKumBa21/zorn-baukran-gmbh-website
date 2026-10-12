import Layout from "../../components/Layout/Layout";
import "./Home.css";
import { BigHeadline, Headline2 } from "../../components/Headline/Headline";
import { InternLinkButton } from "../../components/Button/Button";
import { ImageCarousel } from "../../components/Carousel/carousel";

function Home() {
    return (
        <Layout>
            <div className="HeadContainer">
                <div className="HeadContent">
                    <BigHeadline text={<>Zorn Baukran <br /> GmbH</>} />
                    <div className="HeadActions">
                        <InternLinkButton url="/Krane" text="Unser Sortiment" />
                        <InternLinkButton url="/Kontakt" text="Kontakt aufnehmen" />
                    </div>
                </div>
                <div className="HeadImageLayer">
                    <img src="/Images/DSCN4462.JPG" alt="LKW" />
                </div>
            </div>
            <div className="ServicesContainer">
                <Headline2 text={"Unsere Leistungen"} subtitle={"Starker Partner - Starke Leistung"} />
                <div className="ServicesListWrap">
                    <ul className="ServicesList">
                        <li>Besichtigung vor Ort</li>
                        <li>Kompetente Beratung bei der Auswahl des entsprechenden Kranes</li>
                        <li>An-und Abtransport des Baukranes samt Ballast und Zubehör</li>
                        <li>Errichtung des Unterbaues mit eigenem Material</li>
                        <li>Aufstellen des Baukranes</li>
                        <li>Genaue Einschulung in die Bedienung (Fernsteuerung,...)</li>
                        <li>Verleih von Kranketten, Ladegabeln, Betonsilos und Schuttmulden</li>
                        <li>Abbau des Kranes</li>
                        <li>Transporte werden mit eigenem Fahrzeug durchgeführt</li>
                    </ul>
                </div>
            </div>
            <div>
                <Headline2 text="Unsere Flotte" subtitle="Eindrücke aus den Einsätzen" />
                <ImageCarousel />
            </div>

        </Layout>
    );
}
export default Home;
